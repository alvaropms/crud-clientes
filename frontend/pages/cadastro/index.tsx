import type { NextPage } from "next"
import FormUsuario from "../../components/formUsuario";

const Cadastro: NextPage = () => {
    return(
        <FormUsuario page={'register'}/>
    )
}

export default Cadastro;