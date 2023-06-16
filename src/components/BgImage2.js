import React, { Component} from "react";
import './BgImage2.css';

class BgImage2 extends Component{

  render(){
    return ( 
      <div className="bg">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.txt}</p>
        </div>
      </div>
    );
  }
  
}

export default BgImage2;