import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba bg-light-green b--blue ma2"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
