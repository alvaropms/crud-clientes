import type { NextPage } from "next"
import { useEffect, useState } from "react"
import ClientRow from "../../components/clientRow"
import FormUsuario from "../../components/formUsuario"
import Navbar from "../../components/navbar"
import { Cliente } from "../../models/client.model"
import services from "../../services"

const Home: NextPage = () => {

    const [clientes, setCliente] = useState<Cliente[]>([])
    const [edit, setEdit] = useState(-1)

    useEffect(() => {
        services.listar().then((resp) => {
            setCliente(resp)
        }).catch((error) => {
            alert("Erro ao buscar clientes")
            alert(error)
        })
    }, [])

    return(
        <>
        <Navbar/>

        <h1 className="my-5 text-center" >Listagem de clientes</h1>

        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th className="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente => <ClientRow key={cliente.id} cliente={cliente} setEdit={setEdit}/>)
                    }
                </tbody>
            </table>
            {
                edit < 0 ? null :
                <FormUsuario page={'edit'} cliente={clientes.find((cliente => cliente.id === edit))} setEdit={setEdit}/>
            }
        </div>
        </>
    )
}

export default Home