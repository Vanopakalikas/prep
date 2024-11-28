import { Link } from "react-router-dom"
let auth = () => false
export default function Navbar(){
    return (
        <nav className="gap-6 w-full h-16 bg-red-500 flex item-center px-16">
            <Link to = "/about" className="flex items-center">About</Link>
            <Link to = "/" className="flex items-center">home</Link>
            {(auth() ? <Link to = "/logout" className="flex items-center">Logout</Link> : <Link to = "/login" className="flex items-center">Login</Link>)}
        </nav>
    )
}