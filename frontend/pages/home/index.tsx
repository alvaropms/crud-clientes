import type { NextPage } from "next"
import Navbar from "../../components/navbar"

const Home: NextPage = () => {
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
                    <tr>
                    <td>João</td>
                    <td>joao@joao.com</td>
                    <td align="center">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger ms-4">Excluir</button>
                    </td>
                    </tr>

                    <tr>
                    <td>João</td>
                    <td>joao@joao.com</td>
                    <td align="center">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger ms-4">Excluir</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Home