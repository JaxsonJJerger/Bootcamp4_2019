import React from 'react';

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
					<tr key={directory.id}>
						<td
						onClick = {() => this.props.selectedUpdate(directory.id)}
						>{directory.code} </td>
						<td
						onClick = {() => this.props.selectedUpdate(directory.id)}
						> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
