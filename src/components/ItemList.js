import React from 'react'


const ItemList = ({items}) =>{
    console.log('item--->',items)
    return(
        <div> 
            {
                items.map((item,index)=>{
                    return(
                     <div key={index} className='w-6/12 mx-auto'> 
                        <div className='flex justify-between '>
                            <div className='w-4/5'>
                                <span> {item.card.info.name}</span>
                                <span> {item.card.info.price ? "₹ "+ item.card.info.price/100 : ''}</span>
                                <p> {item.card.info.description} </p>
                            </div>
                            <div className ="w-[100px] h-[100px] relative">
                                {item.card.info.imageId  && <img className="w-full h-full object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} alt="no image"></img>}
                                <button className='absolute left-1/3 top-1/2 text-green-400 border bg-white rounded-md p-2'> Add +</button>
                            </div>
                         </div>

                         <hr></hr>
                    </div>
                    )
                })
                    
            }
        </div>
    )
}

export default ItemList