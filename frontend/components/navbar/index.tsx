import type { NextPage } from "next"
import Link from "next/link"

const Navbar: NextPage = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-2">
            <span className="navbar-brand">Clientes</span>
            <div className="collapse navbar-collapse">
            </div>
            <Link href='/'>
                <button className="btn btn-sm btn-outline-danger" type="button">Deslogar</button>
            </Link>
        </nav>
    )
}

export default Navbar