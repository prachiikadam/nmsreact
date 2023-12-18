import React from 'react'


const ItemList = ({items}) =>{
    console.log('item--->',items)
    return(
        <div> 
            {
                items.map((item,index)=>{
                    return(
                     <div key={index} className='border border-sky-500'> 
                        <div>
                            <span> {item.card.info.name}</span>
                            <span> {item.card.info.price}</span>
                        </div>
                         <p> {item.card.info.description} </p>
                    </div>
                    )
                })
                    
            }
        </div>
    )
}

export default ItemList