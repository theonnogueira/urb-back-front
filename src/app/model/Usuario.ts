import { Cartao } from "./Cartao"

export class Usuario {
    public id: number
    public usuario: string
    public nome: string
    public email: string
    public senha: string
    public  cartao: Cartao[]
}