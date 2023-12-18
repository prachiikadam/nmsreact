import ItemList from "./ItemList"
import NestRestaurantCAtegory from "./NestRestaurantCAtegory"
import SingleRestaurantCategory from "./SingleRestaurantCategory"




const RestaurantCategory = ({data}) =>{
    const isNestedItem =  data['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? true : false
    console.log('isNestedItem',isNestedItem)
    return(
        <div>
            {isNestedItem ? <NestRestaurantCAtegory data = {data}/> : <SingleRestaurantCategory data = {data}/>}
        </div>
    )
}

export default RestaurantCategory