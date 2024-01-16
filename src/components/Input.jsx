
import { useState, useRef} from "react";

function Input({handleFocus , handleBlur, handleDataOnChange}) {
    const [text , setText] = useState("");
    function handleChange(e){
        if(e.target.value === ""){
            handleDataOnChange(e.target.value , false);
        }
        if(e.target.value != ""){
            handleDataOnChange(e.target.value , true);
        }
        setText(e.target.value);
    }
    // function handleKeyDown(e){
    //     console.log(e.key , typeof(e.key));
    //     if (e.key === 'Backspace' && e.target.value === '') {
    //         console.log("amazing");
    //         e.preventDefault();
    //         handelBackspace();
    //     }
    // }
  return (
    <>
        <input type="text " 
            onFocus={handleFocus} 
            onBlur={handleBlur}
            placeholder="add new user" 
            value={text}
            onChange={(e) => handleChange(e)} 
            // onKeyUp={(e)=> handleKeyDown(e)}
        />
    </>
  )
}

export default Input