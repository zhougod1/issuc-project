import React, { Component } from 'react'
import ReactDOM from "react-dom";

class  Example extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    return(
      <div>hello world</div>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector(".root"));
// export default  Example