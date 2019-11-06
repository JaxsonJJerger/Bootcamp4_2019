import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
class AddBuilding extends React.Component{
    buildingAdd(){
        //const bCode = this.code.value;
        //const bName = this.name.value;
        //const bAddr = this.addr.value;

    }
    
    render(){
        

        return(
            <div>
                <form name="newBuildingForm" onSubmit={this.buildingAdd()}>
                <p>Code: <input ref = { (value) => {this.code = value}}
                placeholder="Building Code" type="text" ></input></p>

                <p>Name: <input ref = { (value) => {this.name = value}}
                placeholder="Building Name" type="text" ></input></p>

                <p>Address: <input ref = { (value) => {this.addr = value}}
                placeholder="Building Address" type="text" ></input></p>

                <Button type="submit" value="Submit">Submit</Button>
                </form>
            </div>
        )
    }
}
export default AddBuilding;