import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../utils/UserContext"



const Header = () =>{

    const loggedindata = useContext(UserContext)
   
    return(
        <div className="flex justify-between items-center bg-rose-400">
            <div>
                <img 
                className="w-32 h-12"
                src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEkVwUrTlRge71Ky27SLg4YnNao9Qz0ugHA&usqp=CAU" 
                alt="logo"/>
            </div>
            <div >
                <ul className="flex justify-between">
                    <li className="px-4"><Link to="/"> Home</Link></li>
                    <li className="px-4"><Link to="/contact"> Contact Us </Link></li>
                    <li className="px-4"> <Link to="/about"> About us </Link></li>
                    <li className="px-4"> <Link to="/cart"> Cart </Link></li>
                    <li className="px-4"> <Link to="/grocery"> Grocery </Link></li>
                    <button className="px-4">Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Header