import React, { useState } from "react";
import SearchIcon from "../assets/search.png";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">
        <img src={SearchIcon} alt="search" />
      </button>
    </form>
  );
};

export default Search;
