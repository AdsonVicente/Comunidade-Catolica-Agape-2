/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `conteudos` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `conteudos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "conteudos" DROP CONSTRAINT "conteudos_categoriaId_fkey";

-- AlterTable
ALTER TABLE "conteudos" DROP COLUMN "categoriaId",
ADD COLUMN     "categoria" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "conteudos" ADD CONSTRAINT "conteudos_categoria_fkey" FOREIGN KEY ("categoria") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
