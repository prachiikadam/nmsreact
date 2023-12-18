
import { useEffect, useState } from "react"
import { swiggy_restaurant_url } from  "../utils/constants"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () =>{
    const [resInfo ,setResInfo] = useState(null)
    const restaurantId = useParams()
    console.log('restaurantId',restaurantId)
    const fetchMenu = async()=>{
        const data = await fetch(`https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.6150512%26lng%3D73.7691138%26restaurantId%3D${restaurantId.resid}%26catalog_qa%3Dundefined%26submitAction%3DENTER`)
        //const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6150512&lng=73.7691138&restaurantId=&catalog_qa=undefined&submitAction=ENTER`)
        const json_data = await data.json()

        console.log('json_data------->',json_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards)
        setResInfo(json_data?.data)
    }

    useEffect(()=>{
        fetchMenu()
    },[])


    if(resInfo == null){
        return (<Shimmer/>)
    }
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=> 
    (category.card?.card?.['@type'] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
    category.card?.card?.['@type'] =="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))
    console.log('categories---->>>>>>>',categories)

    return(
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h2>Menu</h2>
            {
                categories.map((category,index)=><RestaurantCategory key={index} data={category?.card?.card}/>)
            }

        </div>
    )
}

export default RestaurantMenu