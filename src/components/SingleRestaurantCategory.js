import React, { useState } from 'react'
import ItemList from './ItemList'


const  SingleRestaurantCategory = ({data,title}) => {
  const [showDetailedMenuCategory , setShowDetailedMenuCategory] = useState(false)
  return (
   <div>
    <div>
         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer" onClick={()=>setShowDetailedMenuCategory(!showDetailedMenuCategory)}>
          <span>{title ? title : data?.title} </span>
          <span>⬇️ </span>
          </div> 

          {showDetailedMenuCategory && <ItemList items = {data?.itemCards} />}
        <hr></hr>
    </div>
   </div>
   );
}

export default SingleRestaurantCategory