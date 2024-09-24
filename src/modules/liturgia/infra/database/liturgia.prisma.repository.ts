import { Liturgia } from "@modules/liturgia/domain/liturgia.entity";
import { PrismaRepository } from "@shared/infra/database/prisma.repository";
import bcrypt from "bcrypt"
import { LiturgiaMap } from "../mappers/liturgia.map";
import { ILiturgiaRepository } from "@modules/liturgia/domain/liturgia.repository.interface";


class LiturgiaPrismaRepository extends PrismaRepository implements ILiturgiaRepository<Liturgia> {

    
    async recuperarPorUuid(uuid: string): Promise<Liturgia | null> {
        const liturgiaRecuperada = await this._datasource.liturgia.findUnique(
            {
                where: {
                    id: uuid
                }
            }
        )
        if (liturgiaRecuperada) {
            return LiturgiaMap.fromPrismaModelToDomain(liturgiaRecuperada);
        }
        return null;
    }

    async recuperarTodos(): Promise<Array<Liturgia>> {
        const liturgiasRecuperadas = await this._datasource.liturgia.findMany();
        const liturgias = liturgiasRecuperadas.map(
            (liturgia) => LiturgiaMap.fromPrismaModelToDomain(liturgia)
        );
        return liturgias;
    }

    async existe(uuid: string): Promise<boolean> {
        const liturgiaExistente = await this.recuperarPorUuid(uuid);
		if (liturgiaExistente)  {return true;}
		return false;
    }


    async inserir(liturgia: Liturgia): Promise<Liturgia> {
        const liturgiaInserida = await this._datasource.liturgia.create(
            {
                data: {
                    id: liturgia.id,
                    primeiraLeitura: liturgia.primeiraLeitura,
                    segundaLeitura: liturgia.segundaLeitura,
                    salmoResponsorial: liturgia.salmoResponsorial,
                    titulo: liturgia.titulo,
                    evangelho: liturgia.evangelho,
                    corLiturgica: liturgia.corLiturgica,
                    dia: liturgia.dia
                }
            }
        );
        return liturgia;
    }

    async atualizar(uuid: string, liturgia: Liturgia): Promise<boolean> {
        const liturgiaAtualizada = await this._datasource.liturgia.update(
            {
                where: {id : uuid},
                data: {
                    primeiraLeitura: liturgia.primeiraLeitura,
                    segundaLeitura: liturgia.segundaLeitura,
                    salmoResponsorial: liturgia.salmoResponsorial,
                    titulo: liturgia.titulo,
                    evangelho: liturgia.evangelho,
                    corLiturgica: liturgia.corLiturgica,
                    dia: liturgia.dia
                }
            }
        );
        if (liturgiaAtualizada) {return true};
        return false;
    }

    async deletar(uuid: string): Promise<boolean> {
        const liturgiaDeletada = await this._datasource.liturgia.delete(
            {
                where: {
                    id: uuid
                }        
            }
        );
        if (liturgiaDeletada.id) {return true;}
        return false;
    }
}

export {LiturgiaPrismaRepository}