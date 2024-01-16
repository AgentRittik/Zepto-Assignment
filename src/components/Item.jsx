


import React from 'react'
import "../CSS/Item.css"
function Item({Image , Name , Email}) {
  return (
    <>
        <div className='item-container'>
            <div className='image-container'>
                <img src={Image} alt="" className='item-image'/>
            </div>
            <div className='name-container'>
                <p className='item-name'>{Name}</p>
            </div>
            <div className='email-container'>
                <p className='item-email'>{Email}</p>
            </div>
        </div>
    </>
  )
}

export default Item;