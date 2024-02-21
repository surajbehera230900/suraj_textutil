import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpclick=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case...","success");
}
const handleLowerclick=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case...","success");
}
const handleOnChange=(e)=>{
    setText(e.target.value)
}
const handleClrclick=()=>{
  setText("")
  props.showAlert("Text Cleared...","success");
}
const reversed = () => {
  let str="";
  for (let index = text.length-1; index >=0; index--) {
    str+= text[index];
  }
  props.showAlert("Text Reversed...","success");
   return setText(str);
}
const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
  props.showAlert("Text Capitallize...","success");

}
const handleSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Spaces Removed...","success");
}
const handleCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copied to Clipboard...","success");
}

const [text,setText]= useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#111028":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="3"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpclick}>Convet to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLowerclick}>Convet to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClrclick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={reversed}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCapitalize}>Capitalize Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleSpaces}>Remove Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>


      </div>
    </div>
    <div className='container my-3'style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview , Enter text above..!"}</p>

    </div>
    </>
  )
}
