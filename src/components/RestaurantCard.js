

const RestaurantCard = ({resData}) =>{
    return(
        <div className="m-4 p-4 w-[200px] border border-gray-100 shadow-xl hover:scale-110">
            <img 
            className=""
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId}
            alt ="res-logo"/>
            <h3>{resData.name}</h3>
            <h4 className="truncate"> {resData.cuisines.join(',')}</h4>
            <h4> {resData.avgRating} Stars</h4>
            <h4>{resData.slaString}</h4>
        </div>
    )
}

export const hocPromotedRestaurantCard = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
            
        )
    }
}

export default RestaurantCard