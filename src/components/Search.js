import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value 
		//of the filter with the value from the textbox
		const filter_value = this.filterInput.value
		//console.log("filter_value is : " + filter_value)
		this.props.filterUpdate(filter_value); //send to parent method
	}
	render() {
		//You will need to save the value 
		//from the textbox and update it as it changes
		//You will need the onChange value 
		//for the input tag to capture the textbox value
		//const {filter_value, filterUpdate} = this.props
		return (
			<form>
				<input 
				ref = { (value) => {this.filterInput = value}}
				type="text" placeholder="Type to Filter"
				onChange = {this.filterUpdate.bind(this)} 
				/>
			</form>
		);
	}
}
export default Search;
