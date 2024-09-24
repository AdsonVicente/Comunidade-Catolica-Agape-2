/*
  Warnings:

  - You are about to drop the column `salmoResponsarial` on the `liturgias` table. All the data in the column will be lost.
  - Added the required column `salmoResponsorial` to the `liturgias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "liturgias" DROP COLUMN "salmoResponsarial",
ADD COLUMN     "salmoResponsorial" TEXT NOT NULL;
