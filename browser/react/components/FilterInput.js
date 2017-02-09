import React from 'react';

const FilterInput = (props) => {
	
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange={(e) => props.whenChanged(e.target.value)} 
      />
    </form>
  );
}

export default FilterInput;