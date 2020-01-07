import React from 'react';
import './App.css';


const styleTop = {
  backgroundColor: 'Black',
  width: "1rem",
  margin: "0 auto",
  borderRadius: " 0.25rem 0.25rem 0 0"

}
const styleBody = {
  backgroundColor: 'Black',
  width: "6rem",
  margin: "0 auto",
  height: "5rem",

}
const styleButton = {
  width: "4rem",
  margin: "0 auto",
  height: "4rem",
  borderRadius: "50px",

}

class TrafficLight extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedLight: 'yellow'
    };
  }
  render() {
    console.log(this.state);
    let redExtraClass = '';
    //if (this.state.clickedLight == 'red') redExtraClass = 'selected'; else redExtraClass = '';

    let yellowExtraClass = '';
    //if (this.state.clickedLight == 'yellow') yellowExtraClass = 'selected'; else yellowExtraClass = '';

    let greenExtraClass = '';
    //if (this.state.clickedLight == 'green') greenExtraClass = 'selected'; else greenExtraClass = '';

    return (
      <div className="container">
        <div className="card" style={styleTop}>
          <div className="card-body">
          </div>
        </div>

        <div className="card" style={styleBody}>
          <div className="card-body pl-3 pt-2">
            <div className={"btn btn-danger red " + (this.state.clickedLight === "red" ? 'selected' : '' )} style={styleButton} onClick={() => this.setState({ clickedLight: "red" })}></div>
          </div>
        </div>

        <div className="card text-right" style={styleBody}>
          <div className="card-body pl-3 pt-2">
            <div className={"btn btn-warning yellow " + (this.state.clickedLight === 'yellow' ? 'selected' : '' )} style={styleButton} onClick={() => this.setState({ clickedLight: "yellow" })}> </div>
          </div>
        </div>

        <div className="card text-right" style={styleBody}>
          <div className="card-body pl-3 pt-1">
            <div className={"btn btn-success green " + (this.state.clickedLight === 'green' ? 'selected' : '' )} style={styleButton} onClick={() => this.setState({ clickedLight: "green" })}></div>
          </div>
        </div>
      </div>
    )
  }
}


export default TrafficLight;
