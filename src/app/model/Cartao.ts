import { Usuario } from "./Usuario"

export class Cartao{
    public id: number
    public numeroCartao: number
    public nome: string
    public status: boolean
    public usuario: Usuario
}