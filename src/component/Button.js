import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import "./Btnstyle.css";
function TextControlsExample() {
  const[setvalue, setResult]=useState("");
  const btclick = () => {
    console.log('AC')
  }
  const cleardisplay = () => {
      setResult("");
      console.log("clear display")
  }
  return (
    <div className="Btnmain">
      <div className="text">
        <h1 className="header">Calculator</h1>
      </div>
      <div className="main">
        <div className="">
          <Form.Control size="lg" type="text" className="box"  placeholder={0}/><br/>
          <br/>
          <div className="num">
            <Button variant="btn btn-dark" value="AC" className="Btn1 ml-2 mb-2 text-dark" onClick={btclick}>AC</Button>{" "}
            <Button variant="btn btn-dark" value="%" className="Btn1 ml-2 mb-2 text-dark" >%</Button>{" "}
            <Button variant="btn btn-dark" value="7" className="Btn1 ml-2 mb-2 text-dark" >7</Button>{" "}
            <Button variant="btn btn-dark" value="DE" className="Btn1 ml-2 mb-2 text-dark" onClick={cleardisplay}>DE</Button>{" "}<br/>
            <Button variant="btn btn-dark" value="/" className="Btn1 ml-2 mb-2 text-dark" >/</Button>{" "}
            <Button variant="btn btn-dark" value="8" className="Btn1 ml-2 mb-2 text-dark" >8</Button>{" "}
            <Button variant="btn btn-dark" value="9" className="Btn1 ml-2 mb-2 text-dark" >9</Button>{" "}
            <Button variant="btn btn-dark" value="*" className="Btn1 ml-2 mb-2 text-dark" >*</Button>{" "}<br/>
            <Button variant="btn btn-dark" value="4" className="Btn1 ml-2 mb-2 text-dark" >4</Button>{" "}
            <Button variant="btn btn-dark" value="5" className="Btn1 ml-2 mb-2 text-dark" >5</Button>{" "}
            <Button variant="btn btn-dark" value="6" className="Btn1 ml-2 mb-2 text-dark" >6</Button>{" "}
            <Button variant="btn btn-dark" value="-" className="Btn1 ml-2 mb-2 text-dark" >-</Button>{" "}<br/>
            <Button variant="btn btn-dark" value="1" className="Btn1 ml-2 mb-2 text-dark" >1</Button>{" "}
            <Button variant="btn btn-dark" value="2" className="Btn1 ml-2 mb-2 text-dark" >2</Button>{" "}
            <Button variant="btn btn-dark" value="3" className="Btn1 ml-2 mb-2 text-dark" >3</Button>{" "}
            <Button variant="btn btn-dark" value="+" className="Btn1 ml-2 mb-2 text-dark" >+</Button>{" "}<br/>
            <Button variant="btn btn-dark" value="00" className="Btn1 ml-2 mb-2 text-dark" >00</Button>{" "}
            <Button variant="btn btn-dark" value="0" className="Btn1 ml-2 mb-2 text-dark" >0</Button>{" "}
            <Button variant="btn btn-dark" value="." className="Btn1 ml-2 mb-2 text-dark" >.</Button>{" "}
            <Button variant="btn btn-dark" value="=" className="Btn1 ml-2 mb-2 text-dark" >=</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextControlsExample;
