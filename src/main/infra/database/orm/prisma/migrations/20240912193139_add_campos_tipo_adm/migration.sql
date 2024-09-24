-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TipoAdmPrisma" ADD VALUE 'ADMEVENTOS_E_CONTEUDOS';
ALTER TYPE "TipoAdmPrisma" ADD VALUE 'ADMEVENTOS_CONTEUDOS_E_LITURGIA';
ALTER TYPE "TipoAdmPrisma" ADD VALUE 'ADMEVENTOS_E_LITURGIA';
ALTER TYPE "TipoAdmPrisma" ADD VALUE 'ADMCONTEUDOS_E_LITURGIA';
