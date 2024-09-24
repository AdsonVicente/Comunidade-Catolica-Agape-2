import { Prisma } from "@prisma/client";
import { Conteudo } from "../../domain/conteudo.entity";
import { IConteudo, RecuperarConteudoProps } from "../../domain/conteudo.types";
import { CategoriaMap } from "@modules/categoria/infra/mappers/categoria.map";

class ConteudoMap {

    public static toDTO(conteudo: Conteudo): IConteudo {
        return {
            id: conteudo.id,
            titulo: conteudo.titulo,
            descricao: conteudo.descricao,
            categoria: conteudo.categoria,
            autor: conteudo.autor,
            banner: conteudo.banner,
            publicadoEm: conteudo.publicadoEm
        }
    }

    public static toDomain(conteudo: RecuperarConteudoProps): Conteudo {
        return Conteudo.recuperar(conteudo);
    }

    public static fromPrismaModelToDomain(conteudo: Prisma.ConteudoCreateInput): Conteudo{
		return ConteudoMap.toDomain({
			id: conteudo.id,
			titulo: conteudo.titulo,
            descricao: conteudo.descricao,
            categoria: conteudo.category,
            autor: conteudo.autor,
            banner: conteudo.banner,
            publicadoEm: conteudo.publicadoEm as Date
		});
	} 


}

export { ConteudoMap };