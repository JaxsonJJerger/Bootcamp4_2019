import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
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
					<Row><Col sm="3">ID:</Col> <Col sm="9">{directory.id}</Col></Row>
					<Row><Col sm="3">Code:</Col> <Col sm="9">{directory.code}</Col></Row>
					<Row><Col sm="3">Building:</Col> <Col sm="9">{directory.name}</Col></Row>
					<Row><Col sm="3">Address:</Col> <Col sm="9">{directory.address}</Col></Row>
					<Button variant="primary" type = "Delete"
					value = "delete" variant="danger"
					onClick={() => this.props.removeListing(directory.id)}>
							Delete
				</Button>
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
