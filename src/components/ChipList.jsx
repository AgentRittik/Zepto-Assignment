



import React, {useState}from 'react'
import Chip from './Chip'
import Input from './Input'
import '../CSS/ChipList.css'
import SearchBox from './SearchBox'
function ChipList({chipData ,filterData ,addNewChip, handleDataOnChange, removeChip}) {
    const [focus , setFocus] = useState(false);
    function handleFocus(){
        setFocus(!focus);
    }
    function handleBlur(){
        setTimeout(() => {
            setFocus(false);
        } , 200)
    }
  return (
    <>
        <div className="main-container d-flex justify-content-start gap-3">
                {chipData?.map((chip, index) =>{
                   return (
                    <div className="individual-chip" id={index}>
                        <Chip key ={index} name={chip.name} image={chip.profileImg} email = {chip.email} id={chip.id}removeChip={removeChip}/>
                    </div>
                   )
                })}
            <div className="input">
                <Input handleFocus={handleFocus} handleBlur={handleBlur} handleDataOnChange={handleDataOnChange}/>
                {(focus)&&(<SearchBox data={filterData } addNewChip={addNewChip}/>)}
            </div>
        </div>
    </>
  )
}

export default ChipList;
