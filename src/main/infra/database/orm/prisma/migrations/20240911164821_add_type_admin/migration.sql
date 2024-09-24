/*
  Warnings:

  - Added the required column `tipo_adm` to the `administradores` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoAdmPrisma" AS ENUM ('ADMGERAL', 'ADMEVENTOS', 'ADMCONTEUDOS', 'ADMLITURGIA');

-- AlterTable
ALTER TABLE "administradores" ADD COLUMN     "tipo_adm" "TipoAdmPrisma" NOT NULL;
