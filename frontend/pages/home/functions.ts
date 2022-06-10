import { Cliente } from "../../models/client.model"
import service from "../../services"

export function excluir(id: number, setCliente: Function, clientes: Cliente[]){
    service.deletar(id).then(() => {
        setCliente(clientes.filter((cliente) => cliente.id !== id))
    }).catch( () => {
        alert("Erro ao excluir")
    })
}

export function atualizar(nome: string,
    email: string,
    id: number,
    setEdit: Function,
    setCliente: Function,
    clientes: Cliente[]){

    const cliente = new Cliente(nome, email, id)
    
    service.atualizar(cliente).then((msg) => {
      alert(msg.data)
      setCliente(clientes.map(e => {
        if(e.id === id){
            e.id = id
            e.email = email
            e.nome = nome
            return e
        }else{
            return e
        }
      }))
  
    }).catch((error) => {
      alert("Erro ao atualizar")
      alert(error.response.data)

    }).finally(() => {
      setEdit(-1)
    })
  }

export function listar(setCliente: Function){
    service.listar().then((resp) => {
        setCliente(resp)
    }).catch((error) => {
        alert("Erro ao buscar clientes")
        alert(error.response.data)
    })
}