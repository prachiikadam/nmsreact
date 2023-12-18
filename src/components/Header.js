import { Link } from "react-router-dom"




const Header = () =>{
    return(
        <div className="header">
            <div>
                <img 
                className="app-logo"
                src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEkVwUrTlRge71Ky27SLg4YnNao9Qz0ugHA&usqp=CAU" 
                alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/contact"> Contact Us </Link></li>
                    <li> <Link to="/about"> About us </Link></li>
                    <li> <Link to="/cart"> Cart </Link></li>
                    <li> <Link to="/grocery"> Grocery </Link></li>
                    <button className="login-btn">Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Header