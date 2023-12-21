import React from 'react'
import SingleRestaurantCategory from './SingleRestaurantCategory'

function NestRestaurantCAtegory({data,isNestedItem}) {
  return (
    <div>
        {data.categories.length && <SingleRestaurantCategory data={data.categories[0]} title={data.title}/> }
    </div>
  )
}

export default NestRestaurantCAtegory