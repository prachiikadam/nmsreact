
import RestaurantCard ,{hocPromotedRestaurantCard} from "./RestaurantCard"
import  {restaurantList, swiggy_url} from "../utils/constants"
import { useEffect ,useState } from "react"
import Shimmer from './Shimmer.js'
import { Link } from "react-router-dom"

 const Body = () =>{
    const [listOfRestaurants ,setListOfRestaurants] = useState([])
    const [searchText , setSearchText] = useState("")
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])
    const PromotedRestaurantCard = hocPromotedRestaurantCard(RestaurantCard)

    const fetchData = async() =>{
        const data = await fetch(swiggy_url)
        const json_data = await data.json()
        console.log(json_data,json_data.data.cards[2].card.card.gridElements)
        setListOfRestaurants(json_data.data.cards[5].card.card.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json_data.data.cards[5].card.card.gridElements?.infoWithStyle?.restaurants)
    }

    
    useEffect(()=>{
        fetchData()
    },[])
    if(filteredListOfRestaurants.length == 0){
        return(<Shimmer/>)
    }
    return(
        <div className="body">
            <div className="search-div">
                <input className ="search-input" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value) 
                }}/>
                <button className="search-btn" onClick={()=>{
                    const filterdData = listOfRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredListOfRestaurants(filterdData)
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>{
                        return res.data.avgRating > 4
                    })
                    setListOfRestaurants(filteredList)
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredListOfRestaurants.map((restaurant)=>{
                 return (
                 <Link to={'/restaurantmenu/' +restaurant.info.id}>
                    {
                        restaurant.info.promoted ? <PromotedRestaurantCard key = {restaurant?.info?.id} resData = {restaurant.info}/>:
                        <RestaurantCard key = {restaurant?.info?.id} resData = {restaurant.info}/>
                    }
                 </Link>)})}
            </div>
        </div>
    )
}
export default Body