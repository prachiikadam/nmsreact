import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body"

// const Header = () =>{
//     return(
//         <div className="header">
//             <div>
//                 <img 
//                 className="app-logo"
//                 src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEkVwUrTlRge71Ky27SLg4YnNao9Qz0ugHA&usqp=CAU" 
//                 alt="logo"/>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li> Home</li>
//                     <li>Contact Us</li>
//                     <li>About us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }


const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
            alt ="res-logo"/>
            <h3>Meghna Foods</h3>
            <h4> Chinese food</h4>
            <h4> 4.4 Stars</h4>
            <h4> 30 Minutes</h4>
        </div>
    )
}

// const Body = () =>{
//     return(
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>

//             </div>
//         </div>
//     )
// }
const App = () =>{
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)