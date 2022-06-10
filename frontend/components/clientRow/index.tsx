import type { NextPage } from "next"
import { Cliente } from "../../models/client.model";

const ClientRow: NextPage<{
    cliente: Cliente, setEdit: Function, excluir: Function
}> = ({cliente, setEdit, excluir}) => {

    return(
        <>
        <tr>
        <td>{cliente.nome}</td>
        <td>{cliente.email}</td>
        <td className="d-flex justify-content-evenly flex-wrap">
            <button onClick={() => setEdit(cliente.id)} type="button" className="btn btn-primary my-1">Editar</button>
            <button onClick={() => excluir(cliente.id)} type="button" className="btn btn-danger my-1">Excluir</button>
        </td>
        </tr>
        </>
    )
}

export default ClientRow;