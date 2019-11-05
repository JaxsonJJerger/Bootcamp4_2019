import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;
		//console.log("We're here " + filterText)
		const buildingList = data
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
