/*
  Warnings:

  - Added the required column `type` to the `Decal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DecalType" AS ENUM ('LOGO', 'TEXTURE');

-- DropIndex
DROP INDEX "Decal_title_key";

-- AlterTable
ALTER TABLE "Decal" ADD COLUMN     "type" "DecalType" NOT NULL;
