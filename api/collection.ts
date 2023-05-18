import { Router } from "express";
import { config } from "dotenv";

import { prisma } from "../utils/connection";
import {
  CredentialError,
  handleError,
  checkQueryStringParams,
  checkParams,
} from "../utils/middlewares";

config();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const request = await prisma.decal.findMany();
    res.json({ decals: request });
  } catch (err) {
    handleError(res, err);
  }
});

router.delete("/:id", checkQueryStringParams(["id"]), async (req, res) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(Number(id)))
      throw new CredentialError("Параметр id повинен бути цілим числом!");

    await prisma.decal.delete({ where: { id: Number(id) } });

    res.json(true);
  } catch (err) {
    handleError(res, err);
  }
});

router.post("/add", checkParams(["decal"]), async (req, res) => {
  try {
    const { decal } = req.body;

    const newDecal = await prisma.decal.create({
      data: {
        image: decal.image,
        title: decal.title,
        type: decal.type,
      },
    });

    res.json({ decal: newDecal });
  } catch (err) {
    console.error(err);
    handleError(res, err);
  }
});

export default router;
