


import React from 'react'
import Item from './Item'
import '../CSS/SearchBox.css'
function SearchBox({data , addNewChip}) {
  return (
    <>
        <article className="search-box">
            <ul className='search-box-ul'>
                {data?.map((item, index) =>{
                    return(
                        <li key={index} onClick={()=>addNewChip(item)}>
                            <Item  Name={item.name} Image={item.profileImg} Email={item.email}/>
                        </li>
                    )
                })}
            </ul>
        </article>
    </>
  )
}

export default SearchBox