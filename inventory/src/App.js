import './App.css';
import { PropTypes } from "prop-types";
import Info from "./info.js";

function App() {
  return (
    <div className="App">
      <Info title="Inventory"></Info>
      <Info ></Info>
      <AddItem text="Tim" number={"1"}></AddItem>
      <AddItem></AddItem>
    </div>
  );
}

function AddItem(props) {

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form"></input>
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 1,
  text: "default",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
