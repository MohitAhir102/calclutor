import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import Button  from "./component/Button";
function App() {
  const containerStyle = {
    backgroundImage: `url("beautiful.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust this value as needed
    width: "100%",
    textAlign: "center",
    paddingTop: "20vh" // Adjust this value as needed
  };
  return (
    <div style={containerStyle} className="watercolor-background ">
      <div className="container" style={{display: 'flex', justifyContent: 'center'}} >
        <Button />
      </div>
    </div>
  );
}
export default App;
