import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import "./Btnstyle.css";

function TextControlsExample() {

  const[setvalue, setResult]=useState("")

  const btclick = () => {
    console.log('AC')
  }

  const cleardisplay = () => {
      setResult("");
      console.log("clear display")
  }
  return (
    <div className="Btnmain">
    
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <Form.Control size="lg" type="text" className="caldisplay" placeholder="0" />
          <br />
          <Button variant="outline-secondary" value="AC" className="Btn1 ml-2 mb-2" onClick={btclick}>AC</Button>{" "}
          <Button variant="outline-secondary" value="DE" className="Btn1 ml-2 mb-2" onClick={cleardisplay}>DE</Button>{" "}
          <Button variant="outline-secondary" value="%" className="Btn1 ml-2 mb-2" >%</Button>{" "}
          <Button variant="outline-secondary" value="/" className="Btn1 ml-2 mb-2" >/</Button>{" "} <br/>

          <Button variant="outline-secondary" value="7" className="Btn1 ml-2 mb-2" >7</Button>{" "}
          <Button variant="outline-secondary" value="8" className="Btn1 ml-2 mb-2" >8</Button>{" "}
          <Button variant="outline-secondary" value="9" className="Btn1 ml-2 mb-2" >9</Button>{" "}
          <Button variant="outline-secondary" value="*" className="Btn1 ml-2 mb-2" >*</Button>{" "}<br/>

          <Button variant="outline-secondary" value="4" className="Btn1 ml-2 mb-2" >4</Button>{" "}
          <Button variant="outline-secondary" value="5" className="Btn1 ml-2 mb-2" >5</Button>{" "}
          <Button variant="outline-secondary" value="6" className="Btn1 ml-2 mb-2" >6</Button>{" "}
          <Button variant="outline-secondary" value="-" className="Btn1 ml-2 mb-2" >-</Button>{" "}<br/>

          <Button variant="outline-secondary" value="1" className="Btn1 ml-2 mb-2" >1</Button>{" "}
          <Button variant="outline-secondary" value="2" className="Btn1 ml-2 mb-2" >2</Button>{" "}
          <Button variant="outline-secondary" value="3" className="Btn1 ml-2 mb-2" >3</Button>{" "}
          <Button variant="outline-secondary" value="+" className="Btn1 ml-2 mb-2" >+</Button>{" "}<br/>

          <Button variant="outline-secondary" value="00" className="Btn1 ml-2 mb-2" >00</Button>{" "}
          <Button variant="outline-secondary" value="0" className="Btn1 ml-2 mb-2" >0</Button>{" "}
          <Button variant="outline-secondary" value="." className="Btn1 ml-2 mb-2" >.</Button>{" "}
          <Button variant="outline-secondary" value="=" className="Btn1 ml-2 mb-2" >=</Button>{" "}
          
        </div>
      </div>
    </div>
  );
}

export default TextControlsExample;
