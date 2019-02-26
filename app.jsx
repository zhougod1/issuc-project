import React, { Component } from 'react'
import ReactDOM from "react-dom";
import SocketClient from './src/socketClient/socket_client.jsx';


class  App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    return(
      <SocketClient />
    )
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));