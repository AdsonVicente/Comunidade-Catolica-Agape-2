/*
  Warnings:

  - You are about to alter the column `data` on the `eventos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE "eventos" ALTER COLUMN "data" SET DATA TYPE VARCHAR(15);
