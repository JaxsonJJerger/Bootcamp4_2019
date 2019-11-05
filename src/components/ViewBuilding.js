import React from 'react';


class ViewBuilding extends React.Component {
	
	render() {
		const {data} = this.props //data sent from app
		const building = data //schema for formatting and filtering for building
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
				</div>
			)
		})
		

		//console.log(selected)
		return (
			<div>
				<p>
					{building}
					{''}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
