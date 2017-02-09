// This stateful component is going to compose our FilterInput and Artists together by managing the state of the input form, and then filtering the list of artists it passes to Artists.

import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistContainer extends React.Component {

	constructor(){
		super()
		this.state = {userInput: ""}; 
	}

	setUserInput (input){
		this.setState({userInput: input});
	};  

  render () {
  	const inputValue = this.state.userInput;
  	const filteredArtists = this.props.artists.filter(artist =>
    artist.name.match(inputValue));
  	
  	return (
  		<div>
  		<h1>Search for an artist:</h1> 
  		<FilterInput whenChanged={(input)=>this.setUserInput(input)} /> 
  		<Artists artists={filteredArtists} /> 
  		</div> 

  		)
  }

} 