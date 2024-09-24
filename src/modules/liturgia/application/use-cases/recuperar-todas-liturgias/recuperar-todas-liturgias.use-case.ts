import { Categoria } from "@modules/categoria/domain/categoria.entity";
import { ICategoriaRepository } from "@modules/categoria/domain/categoria.repository.interface";
import { ICategoria } from "@modules/categoria/domain/categoria.types";
import { CategoriaMap } from "@modules/categoria/infra/mappers/categoria.map";
import { Liturgia } from "@modules/liturgia/domain/liturgia.entity";
import { ILiturgiaRepository } from "@modules/liturgia/domain/liturgia.repository.interface";
import { ILiturgia } from "@modules/liturgia/domain/liturgia.types";
import { LiturgiaMap } from "@modules/liturgia/infra/mappers/liturgia.map";
import { IUseCase } from "@shared/application/use-case.interface";

class RecuperarTodasLiturgiasUseCase implements IUseCase<void,Array<ILiturgia>> {
    private _liturgiaRepositorio: ILiturgiaRepository<Liturgia>;

    constructor(repositorio: ILiturgiaRepository<Liturgia>){
        this._liturgiaRepositorio = repositorio;
    }

    async execute(): Promise<ILiturgia[]> {

        const todasLiturgias: Array<Liturgia> = await this._liturgiaRepositorio.recuperarTodos();

        const todasLiturgiasDTO = todasLiturgias.map(
            (liturgia) => LiturgiaMap.toDTO(liturgia)
        );

        return todasLiturgiasDTO;
    }

}

export { RecuperarTodasLiturgiasUseCase }