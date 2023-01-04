import "./App.css"
import Add from "./Components/Add";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <div id="main-item">
        <Navbar />
        <Add />
        <Form />
      </div>
    </>
  );
}

export default App;
