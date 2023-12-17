import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import Button  from "./component/Button";

function App() {
  return (
    <>
    <div className="container">
      <h1 className="d-flex justify-content-center align-items-center vh-75">Calculator</h1>
      <Button />
      </div>
    </>
  );
}

export default App;