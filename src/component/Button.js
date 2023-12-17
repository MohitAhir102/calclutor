import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from 'react';
import App from "../App.css";

function TextControlsExample() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <Form.Control size="lg" type="text" placeholder="Enter value" />
          <br />
          <Button variant="outline-secondary" className="ml-10">AC</Button>{" "}
          <Button variant="outline-secondary">DE</Button>{" "}
          <Button variant="outline-secondary">%</Button>{" "}
          <Button variant="outline-secondary">/</Button>{" "} <br/>

          <Button variant="outline-secondary">7</Button>{" "}
          <Button variant="outline-secondary">8</Button>{" "}
          <Button variant="outline-secondary">9</Button>{" "}
          <Button variant="outline-secondary">*</Button>{" "}<br/>

          <Button variant="outline-secondary">4</Button>{" "}
          <Button variant="outline-secondary">5</Button>{" "}
          <Button variant="outline-secondary">6</Button>{" "}
          <Button variant="outline-secondary">-</Button>{" "}<br/>

          <Button variant="outline-secondary">1</Button>{" "}
          <Button variant="outline-secondary">2</Button>{" "}
          <Button variant="outline-secondary">3</Button>{" "}
          <Button variant="outline-secondary">+</Button>{" "}<br/>

          <Button variant="outline-secondary">00</Button>{" "}
          <Button variant="outline-secondary">0</Button>{" "}
          <Button variant="outline-secondary">.</Button>{" "}
          <Button variant="outline-secondary">=</Button>{" "}

        </div>
        <div>
        <button className={App.Btn1}> app</button>
          
        </div>
      </div>
    </>
  );
}

export default TextControlsExample;
