interface IForm {
    nome: string;
    email: string;
    telefone: string;
}

interface IContatoProps {
    api: any;
}

export type { IForm, IContatoProps }