


import React from 'react'
import '../CSS/Chip.css'
const Chip = ({name, image, removeChip ,id})  =>{
  return (
    <>
        <div className="d-flex chip-container align-content-center text-center gap-1">
            <div className="chip-image">
                <img src={image} alt="" className='chip-img'/>
            </div>
            <div className="chip-name-container">
                <p className='text-content chip-name'>{name}</p>
            </div>
            <div className="chip-button">
                <p className='button text-content' onClick={()=>removeChip(id)}><span>X</span></p>   
            </div>
        </div>
    </>
  )
}

export default Chip