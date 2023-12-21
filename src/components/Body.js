
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
        console.log('all restaurant data',json_data,json_data.data.cards[2].card.card.gridElements)
        setListOfRestaurants(json_data.data.cards[5].card.card.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json_data.data.cards[5].card.card.gridElements?.infoWithStyle?.restaurants)
    }

    
    useEffect(()=>{
        fetchData()
    },[])
    if(filteredListOfRestaurants.length == 0){
        return(<Shimmer/>)
    }

    const searchRestaurant = ()=>{
        const filterdData = listOfRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredListOfRestaurants(filterdData)
    }
    return(
        <div className="body mx-4 ">
            <div className="flex justify-between items-center">
                <div className="search-div w-3/4">
                    <input className ="border border-solid border-black w-3/4  px-4  m-4 rounded" value={searchText} onChange={(e)=>{
                    console.log('In on change')
                    setSearchText(e.target.value) 
                    }} onKeyDown={(e)=>{
                        if(e.key == 'Enter'){
                            searchRestaurant()
                        }
                    }}/>
                    <button className="px-4 bg-red-400 py-[1px] m-4 text-white rounded" onClick={searchRestaurant}>Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn border border-red-700 bg-red-400 rounded text-white px-4 py-2"
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res)=>{
                            console.log('res',res.data)
                            return res?.data?.avgRating > 4
                        })
                        setListOfRestaurants(filteredList)
                    }}
                    >Top Rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
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