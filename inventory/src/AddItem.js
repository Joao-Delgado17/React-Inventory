import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add a Item</h2>
      </div>
      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          type="text"
          id="name-field"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="price-field">Price:</label>
        <input
          type="number"
          id="price-field"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label htmlFor="type-field">Type:</label>
        <input
          type="text"
          id="type-field"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label htmlFor="brand-field">Brand:</label>
        <input
          type="text"
          id="brand-field"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></input>
      </div>
      <div className="row mt-3 justify-content-center">
        <button type="button" className="col-3 btn btn-dark" onClick={addItemButtonPressed}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
