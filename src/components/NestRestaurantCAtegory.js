import React from 'react'
import SingleRestaurantCategory from './SingleRestaurantCategory'

function NestRestaurantCAtegory({data}) {
  return (
    <div>
        <h3>{data.title}</h3>
        {data.categories.length && <SingleRestaurantCategory data={data.categories[0]}/> }
    </div>
  )
}

export default NestRestaurantCAtegory