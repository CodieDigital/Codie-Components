import { AxiosInstance } from "axios";

interface IForm {
    nome: string;
    email: string;
    telefone: string;
}

interface IContatoProps {
    api: AxiosInstance;
}

export type { IForm, IContatoProps }