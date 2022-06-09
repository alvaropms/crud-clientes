import type { NextPage } from "next"
import FormUsuario from "../../components/formUsuario";

const Cadastro: NextPage = () => {
    return(
        <FormUsuario isLogin={false}/>
    )
}

export default Cadastro;