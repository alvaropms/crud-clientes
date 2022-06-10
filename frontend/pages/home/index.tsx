import type { NextPage } from "next"
import { useEffect, useState } from "react"
import ClientRow from "../../components/clientRow"
import FormUsuario from "../../components/formUsuario"
import Navbar from "../../components/navbar"
import { Cliente } from "../../models/client.model"
import { atualizar, excluir, listar } from "./functions"

const Home: NextPage = () => {

    const [clientes, setCliente] = useState<Cliente[]>([])
    const [edit, setEdit] = useState(-1)

    function excluirImpl(id: number){
        excluir(id, setCliente, clientes)
    }

    function atualizarImpl(nome: string, email: string, id: number){
        atualizar(nome, email, id, setEdit, setCliente, clientes)
    }

    listar(setCliente)

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
                        clientes.map(cliente => <ClientRow key={cliente.id} excluir={excluirImpl} cliente={cliente} setEdit={setEdit}/>)
                    }
                </tbody>
            </table>
            {
                edit < 0 ? null :
                <FormUsuario page={'edit'} cliente={clientes.find((cliente => cliente.id === edit))} atualizar={atualizarImpl}/>
            }
        </div>
        </>
    )
}

export default Home