import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
    //<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
    console.log("Filter State from parent: " + this.state.filterText)
    return (
      <div>
        <Jumbotron fluid>
          <Row>
            <Col sm="3"/><Col class="text-center"><h1>UF Directory App</h1></Col><Col sm="3"/>
          </Row>
        </Jumbotron>
          
      
      
      <Container>
      <div className="bg">
          
        <Row>
          <Col>
            <Search
              filterText = {this.state.filterText}
              filterUpdate = {this.filterUpdate.bind(this)}
              
            />
        </Col>
        </Row>
        <Row>
        <main>
          <div className="row">
            <div className="column1">
            <Row>
                  <Col sm = "2"><b>Code</b></Col>
                   <Col sm = "10"><b>Building</b></Col>
            </Row>
              <div className="tableWrapper">
                
                <table className="table table-striped table-hover">
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
              <AddBuilding
              data = {this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
        </Row>
        </div>
      </Container>
      </div>
    );
  }
}

export default App;


//<RemoveBuilding
 //                 selectedBuilding = {this.state.selectedBuilding}
   //               data = {this.props.data}
     //         />