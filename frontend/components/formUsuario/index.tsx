import type { NextPage } from "next"
import Link from "next/link"

const FormUsuario: NextPage<{isLogin: boolean}> = ({isLogin}) => {

    return(
        <div className='fullScreenHeight d-flex flex-column align-items-center justify-content-center' >
        <div className="card text-center text-white bg-dark p-4">
          <div className="card-body">
    
            <h5>Faça seu {isLogin ? 'Login' : 'Cadastro'}</h5>
    
            <form className='pt-3'>
    
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" placeholder="exemplo@exemplo.com"/>
    
              <label htmlFor="exampleInputEmail1">Senha</label>
              <input type="password" className="form-control"/>
    
              <button type="button" className="fullWidth mt-2 btn btn-primary">
                  {
                      isLogin ?
                      "Logar" :
                      "Cadastrar"
                  }
              </button>
    
              {
                isLogin ? 
                <Link href='/cadastro'>
                    Cadastrar-se
                </Link> :
                <Link href='/'>
                    Voltar
                </Link>
              }
    
            </form>
    
          </div>
        </div>
      </div>
    )
}

export default FormUsuario