import express from "express";
import { config } from "dotenv";
import cors from "cors";
import multer from "multer";

import dalleAPI from "./api/dall-e";
import collectioAPI from "./api/collection";

config();

const app = express();
export const upload = multer();

app.set("PORT", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/dall-e/", dalleAPI);
app.use("/api/v1/collection/", upload.single("image"), collectioAPI);

app.listen(app.get("PORT"), () =>
  console.log(`Server ready at http://localhost:${app.get("PORT")}`)
);
