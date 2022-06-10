import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Cliente } from "../../models/client.model"
import { cadastrar } from "./functions"

const FormUsuario: NextPage<{
  page: String, cliente?: Cliente, atualizar?: Function
}> = ({page, cliente, atualizar}) => {

  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')

  let isLogin: boolean = false
  let isEdit: boolean = false

  switch (page.toLowerCase()) {
    case 'login':
      isLogin = true
      break
    case 'edit':
      isEdit = true
    default:
      break
  }

  useEffect(() => {
    if(isEdit){
      setNome(cliente?.nome!)
      setEmail(cliente?.email!)
    }
  }, [])

  const router = useRouter()

    return(
        <div className={`d-flex flex-column align-items-center justify-content-center ${isEdit ? '' : 'fullScreenHeight'}`} >
        <div className="card text-center text-white bg-dark p-4">
          <div className="card-body">

            {
              isEdit ? <h5>Editar cliente</h5> :
              <h5>Faça seu {isLogin ? 'Login' : 'Cadastro'}</h5>
            }
    
            <form className='pt-3'>
              
              {
                isLogin ? null :
                <><label htmlFor="nome">Nome</label>
                <input type="text" className="form-control" value={nome} onChange={ (e) => setNome(e.target.value)} placeholder="João da Silva"/> </>
              }

              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" value={email} onChange={ e => setEmail(e.target.value)} placeholder="exemplo@exemplo.com"/>
              
              {
                isEdit ? null :
                <><label htmlFor="senha">Senha</label>
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className="form-control"/></>
              }
    
              <button type="button" onClick={() => {
                if(atualizar && isEdit){
                  return atualizar(nome, email, cliente?.id)
                }else{
                  if(isLogin){
                    return router.push('/home')
                  }
                  return cadastrar(nome, email, senha)
                }
              }} 
              className="fullWidth mt-2 btn btn-primary">
                  {
                      isLogin ? "Logar" : isEdit ? "Salvar" : "Cadastrar"
                  }
              </button>
    
              {
                isEdit ? null :
                isLogin ? 
                <Link href='/cadastro'>
                    Cadastrar-se
                </Link> :
                <Link href='/'>
                    Logar
                </Link>
              }
    
            </form>
    
          </div>
        </div>
      </div>
    )
}

export default FormUsuario