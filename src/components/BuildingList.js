import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
//import renderTooltip from 'react-bootstrap/renderTooltip'
class BuilingList extends React.Component {
	
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, removedBuildings } = this.props;
		//console.log("We're here " + filterText)
		
		function checkID(id){
			if (removedBuildings.find(function(element){return element === id}) === undefined)
			{return true}
			else{return false}
		}
		const buildingList = data
			.filter(directory =>
				{
					return checkID(directory.id)
				}
			)
			.filter(directory => 
				{
					return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				})
			.map(directory => {
				return (
					<Row key={directory.id}>
						<Col sm = "2" class="hover"
						onClick = {() => this.props.selectedUpdate(directory.id)}>
							{directory.code} 
						</Col>
						<Col sm = "10" class="hover"
						onClick = {() => this.props.selectedUpdate(directory.id)}>
							 {directory.name} 
						</Col>
					</Row>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
//overlay={renderTooltip}