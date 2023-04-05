import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Search for an Item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            type="text"
            id="name-field"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="price-field">Max Price:</label>
          <input
            type="number"
            id="price-field"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <input
            type="text"
            id="type-field"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            type="text"
            id="brand-field"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-10"/>
        <button type="button" className="col-2 btn btn-dark" onClick={searchButtonPressed}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
