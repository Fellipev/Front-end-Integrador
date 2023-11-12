import { UserData } from "./UserData";

export interface PesoData {
    id: number,
    peso: number,
    dataRegistro: Date,
    usuario: UserData,
}