-- CreateTable
CREATE TABLE "eventos" (
    "id" UUID NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "local" VARCHAR(50) NOT NULL,
    "data" VARCHAR(10) NOT NULL,
    "horario" VARCHAR(6) NOT NULL,
    "banner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conteudos" (
    "id" UUID NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "autor" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "publicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "categoriaId" UUID NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "conteudos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administradores" (
    "isFirstLogin" BOOLEAN NOT NULL DEFAULT true,
    "id" UUID NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "administradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liturgias" (
    "id" UUID NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titulo" TEXT NOT NULL,
    "corLiturgica" TEXT NOT NULL,
    "primeiraLeitura" TEXT NOT NULL,
    "salmoResponsarial" TEXT NOT NULL,
    "segundaLeitura" TEXT NOT NULL,
    "evangelho" TEXT NOT NULL,
    "dia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "liturgias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscricoes" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventId" UUID NOT NULL,

    CONSTRAINT "Inscricoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "administradores_email_key" ON "administradores"("email");

-- AddForeignKey
ALTER TABLE "conteudos" ADD CONSTRAINT "conteudos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricoes" ADD CONSTRAINT "Inscricoes_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
