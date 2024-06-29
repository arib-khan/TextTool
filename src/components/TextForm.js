import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to lowercase!","success");
    } 

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Convert to uppercase!","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)     // text + newtext 
    }

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Text Cleared!","success");
    }

    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Copy to clipboard!","success");
    }

    const handleExtreSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");
    }
    


    const[text,setText] = useState('Enter your text');  // to change the state 
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
     <div className="mb-3">
      <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#212529':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="3"></textarea>
     </div>
     <button disabled={text.length===0} className="btn btn-dark  mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>

     <button disabled={text.length===0} className="btn btn-dark  mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>

     <button disabled={text.length===0} className="btn btn-dark  mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>

     <button disabled={text.length===0} className="btn btn-dark  mx-2 my-1" onClick={handleExtreSpaces}>Remove Extra Spaces</button>

     <button disabled={text.length===0} className="btn btn-dark  mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>| {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words | {text.length} characters | {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read |</p>
      
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
