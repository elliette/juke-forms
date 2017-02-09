import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';


export default class NewPlaylistContainer extends React.Component {

	constructor(){
		super()
		this.state = {userInput: "", disabled: true, displayWarning: false, notYetPopulated: true, displayEmptyWarning: false}; 

    this.makePlaylist = this.makePlaylist.bind(this); 
	}

	setUserInput (input){
		this.setState({userInput: input});
    if (input.length > 0){
      this.setState({disabled: false});
      this.setState({notYetPopulated: false})
      this.setState({displayEmptyWarning: false})
    } 
    if (input.length > 16){
      this.setState({disabled: true});
      this.setState({displayWarning: true})
    } 
    if (input.length < 16){
      this.setState({displayWarning: false})
    } 
    if (input.length === 0 && this.state.notYetPopulated === false){
      this.setState({displayEmptyWarning: true})
    }


	};  

  handleSubmit(){
    console.log("Submit!"); 
    const inputValue = this.state.userInput;
    this.setState({userInput: ""});
    this.makePlaylist(inputValue);  
    
  }

  makePlaylist(input){
    axios.post('/api/playlists', {name: input})
      .then(res => res.data)
      .then(result => {
      console.log("I have posted!")
      console.log(result) // response json from the server!
    });
  }

  render () { 
  	// const inputValue = this.state.userInput;
  	// const filteredArtists = this.props.artists.filter(artist =>
   //  artist.name.match(inputValue));
  	
  	return (
  		<div>
  		<NewPlaylist displayWarning= {this.state.displayWarning} displayEmptyWarning={this.state.displayEmptyWarning} disable={this.state.disabled} userInput={this.state.userInput} whenChanged={(input)=>this.setUserInput(input)} whenSubmitted={() => this.handleSubmit()} /> 
  		</div> 

  		)
  }

} 