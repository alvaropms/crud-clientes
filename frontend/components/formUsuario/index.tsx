import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { Cliente } from "../../models/client.model"

const FormUsuario: NextPage<{page: String, cliente?: Cliente, setEdit?: Function}> = (props) => {

  const cliente = props.cliente

  let isLogin: boolean = false
  let isEdit: boolean = false

  switch (props.page.toLowerCase()) {
    case 'login':
      isLogin = true
      break
    case 'edit':
      isEdit = true
    default:
      break
  }

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
                <input type="text" className="form-control" value={isEdit ? cliente?.nome : ''} placeholder="João da Silva"/> </>
              }

              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" value={isEdit ? cliente?.email : ''} placeholder="exemplo@exemplo.com"/>
              
              {
                isEdit ? null :
                <><label htmlFor="senha">Senha</label>
                <input type="password" className="form-control"/></>
              }
    
              <button type="button" onClick={() => {
                if(props.setEdit && isEdit){
                  return props.setEdit(-1)
                }else{
                  return router.push('/home')
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