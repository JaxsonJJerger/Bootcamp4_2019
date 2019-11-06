import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
//import RemoveBuilding from './components/RemoveBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      removedBuildings: [] //.push(1) to add to end of array
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState ({
      filterText: value
      
    });
    
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState ({
      selectedBuilding: id
    });
    
  }

  removeListing(id){
    this.setState ( {
      removedBuildings: this.state.removedBuildings.concat(id)
    })
    console.log("Buildings Removed: " + this.state.removedBuildings);

  }

  render() {
    console.log("Filter State from parent: " + this.state.filterText)
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        
        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
          
        />
        <div className="row">
          Searching for:
        </div>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    removedBuildings = {this.state.removedBuildings}
                  />
                  
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              selectedBuilding = {this.state.selectedBuilding}
              data = {this.props.data}
              removedBuildings = {this.state.removedBuildings}
              removeListing = {this.removeListing.bind(this)}
              />
              
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;


//<RemoveBuilding
 //                 selectedBuilding = {this.state.selectedBuilding}
   //               data = {this.props.data}
     //         />