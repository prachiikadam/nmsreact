import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body"
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import {createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const Grocery  = lazy(()=>import('./components/Grocery'))


const App = () =>{
    return(
        <Provider store={appStore}>
            <div className="App">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element :<App/>,
        errorElement : <Error/>,
        children :
        [
            {
                path:'/',
                element : <Body/>
            },
            {
                path:'/about',
                element : <About/>
            },
            {
                path:'/contact',
                element : <Contact/>
            },
            {
                path:'/restaurantmenu/:resid',
                element : <RestaurantMenu/>
            },
            {
                path:'/grocery',
                element :<Suspense fallback={<h1>Loadin...........</h1>} ><Grocery/></Suspense>
            },
            {
                path:'/cart',
                element : <Cart/>
            }
        ]
    }

])


const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<App/>)
root.render(<RouterProvider router={appRouter}/>)