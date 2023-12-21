import ItemList from "./ItemList"
import NestRestaurantCAtegory from "./NestRestaurantCAtegory"
import SingleRestaurantCategory from "./SingleRestaurantCategory.js"




const RestaurantCategory = ({data}) =>{
    const isNestedItem =  data['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? true : false
    console.log('isNestedItem',isNestedItem)
    return(
        <div>
            {isNestedItem ? <NestRestaurantCAtegory data = {data} isNestedItem={isNestedItem}/> : <SingleRestaurantCategory isNestedItem={isNestedItem} data = {data}/>}
        </div>
    )
}

export default RestaurantCategory