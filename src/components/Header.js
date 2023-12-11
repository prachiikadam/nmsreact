




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
                    <li> Home</li>
                    <li>Contact Us</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <button className="login-btn">Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Header