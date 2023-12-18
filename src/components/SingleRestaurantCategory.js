import React from 'react'
import ItemList from './ItemList'


const  SingleRestaurantCategory = ({data}) => {

  return (
   <div>
    <div>
         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
          {data?.title} </div> 
        <ItemList items = {data?.itemCards} />
        <hr></hr>
    </div>
   </div>
   );
}

export default SingleRestaurantCategory