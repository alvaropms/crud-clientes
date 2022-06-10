import axios, { Axios, AxiosResponse } from "axios"
import { Cliente } from "../models/client.model"

export class Services{
    private api: Axios = axios.create({
        baseURL: 'http://localhost:8080'
    })

    private toCliente(data: AxiosResponse<any, any>): Cliente{
        const json = data.data
        return new Cliente(json['nome'], json['email'], json['id'])
    }

    private toClientes(data: AxiosResponse<any, any>): Cliente[]{
        const json = data.data
        return json.map((cliente: Cliente) => {
            return cliente
        })
    }

    async cadastrar(cliente: Cliente){
        return await this.api.post('/cadastrar', cliente)
    }

    async listar(){
        const data = await this.api.get('/listar')
        return this.toClientes(data)
    }

    async deletar(id: Number){
        return await this.api.delete('/deletar/'+id)
    }

    async atualizar(cliente: Cliente){
        return await this.api.put('/atualizar', cliente)
    }

    async pesquisar(nome: string){
        return await this.api.get('/pesquisar',{params: {nome}})
    }
}

const service = new Services

export default service


