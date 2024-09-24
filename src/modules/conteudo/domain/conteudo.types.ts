import { ICategoria } from "@modules/categoria/domain/categoria.types";


interface IConteudo {
    id?: string;
    titulo: string;
    descricao: string;
    categoria: string;
    autor: string;
    banner: string;
    publicadoEm?: Date;
}

type CriarConteudoProps = Omit<IConteudo, "id">

type EditarConteudoProps = Omit<IConteudo, "id">

type RecuperarConteudoProps = Required<IConteudo>;

export{IConteudo, CriarConteudoProps, EditarConteudoProps, RecuperarConteudoProps}