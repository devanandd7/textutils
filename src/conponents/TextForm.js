import React, { useState } from "react";

export default function TextForm(props) {
  // button function --> upercase
  const upercase = () => {
    console.log("to upercase");
    let newText = text.toUpperCase();
    setText(newText);
  };

  // button function --> lowerCase
  const lowerCase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
  };

  // button function --> removeSpace
  const removeSpace = () => {
    let removeSpace = text.split(/[ ]+/).join(" ");
    // here,also use = filter()
    setText(removeSpace);
  };

  // button function --> copyText
  const copyText = () => {
    let textC = document.getElementById("myBox");
    textC.select();
    navigator.clipboard.writeText(textC.value);
  };

  //   button function --> clear
  const clear = () => {
    setText("");
  };

  // this method written for textarea ,for to write in textarea on the Time. without this method you cannot write any thing after performing any tast (toUppercase,lowerCase .....e.t.c)

  // event= handleOnChange take a parameter that's event.
  // target= target is targeting the text area to before and after changese.
  // value= value is text that define in textarea html. value={text}.

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState();

  return (
    <div className="container" >
      <h1>enter the text to analize</h1>

      <div className="mb-3">
        <label for="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="7"
        ></textarea>
      </div>

      <button className="m-1 ,imt" onClick={upercase}>
        upper case
      </button>
      <button className="m-1 ,imt" onClick={lowerCase}>
        lower case
      </button>
      <button className="m-1 ,imt" onClick={removeSpace}>
        remove spaces
      </button>
      <button className="m-1 ,imt" onClick={copyText}>
        copy text
      </button>
      <button className="m-1 ,imt">letter count</button>
      <button className="m-1 ,imt" onClick={clear}>
        clear
      </button>

      {/* <span >{(text).split(" ").length-1}word ,  {(text).length} length</span> */}
    </div>
  );
}
