import React from 'react';


class ViewBuilding extends React.Component {
	
	render() {
		const {data, removedBuildings} = this.props //data sent from app
		function checkID(id){
			if (removedBuildings.find(function(element){return element === id}) === undefined)
			{return true}
			else{return false}
		}
		const building = data //schema for formatting and filtering for building
		.filter(directory =>
			{
				return checkID(directory.id)
			}
		)
		.filter(directory => {
				return directory.id === this.props.selectedBuilding
		})
		.map(directory => {
			return(
				<div key = {directory.id}>
					<div>ID: {directory.id}</div>
					<div>Code: {directory.code}</div>
					<div>Building: {directory.name}</div>
					<div>Address: {directory.address}</div>
					<button variant="primary" type = "Delete"
					value = "delete" onClick={() => this.props.removeListing(directory.id)}>
							Delete
				</button>
				</div>
			)
		})
		

		//console.log(selected)
		return (
			<div>
				<p>
					{building}
					{''}<break/>
					<i>Click on a name to view more information</i>
				</p>
				
			</div>
		);
	}
}
export default ViewBuilding;
