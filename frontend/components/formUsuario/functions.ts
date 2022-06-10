import router from "next/router"
import { Cliente } from "../../models/client.model"
import service from "../../services"

export function cadastrar(nome: string, email: string, senha: string){
  const newCliente: Cliente = new Cliente(nome, email, undefined, senha)

  service.cadastrar(newCliente).then(() => {
    alert("Cadastrado com sucesso!")
    router.push('/')
    
  }).catch((error) => {
    alert("Erro ao cadastrar")
    alert(error.response.data)
  })

}

export function logar(email: string, senha: string){
  service.logar(email, senha).then((msg) => {
    alert(msg.data)
    router.push('/home')
  }).catch((error) => {
    alert("Erro ao logar")
    alert(error.response.data)
  })
}