import React from 'react';


const NewPlaylist  = (props) => {

    return (
    <div> 
    <h1>Create a New Playlist:</h1> 
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Please enter a name here"
        onChange={(e) => props.whenChanged(e.target.value)} 
        value={props.userInput}
      />
    </form>
    <button type="button"  disabled={props.disable} className="btn btn-primary btn-block" onClick={props.whenSubmitted}>Submit</button>
    {props.displayWarning ? <div className="alert alert-warning">Your playlist name is too long.</div> : null }  
    {props.displayEmptyWarning ? <div className="alert alert-warning">You cannot submit an empty playlist name.</div> : null }
    </div> 

    );
  }

	
export default NewPlaylist;
