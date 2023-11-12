import { UserData } from "../interface/UserData";

interface RowProps {

    id?: number,
    peso: number,
    dataRegistro: Date
    usuario: UserData,
    
}

export function Row({ id, peso, dataRegistro, usuario } : RowProps) {

    const dataFormatada = new Date(`${dataRegistro}T00:00:00`).toLocaleDateString();

    return(
        <tr key={id}>
            <td>Usuário: {usuario.nomeCompleto}</td>
            <td>Peso: {peso}</td>
            <td>Data da pesagem: {dataFormatada}</td>
        </tr>
    )
}