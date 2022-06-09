import type { NextPage } from 'next'
import FormUsuario from '../components/formUsuario'

const Login: NextPage = () => {

  return (
    <FormUsuario isLogin={true}/>
  )
}

export default Login
