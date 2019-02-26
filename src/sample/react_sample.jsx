import React, { Component } from 'react'
import ReactDOM from "react-dom";
import './react_sample.css'

export class State extends Component {
  componentWillMount(){
    console.log('state',this.props)
  }
  render(){
    return <div> world </div>
  }
}
export const StateLess = () => {
  console.log('less',module)
  return <div>hello</div>
}

class  Sample extends Component {
  constructor(){
    super();
    this.state = {
      s: 1
    }
  }

  componentDidMount() {
    setInterval(()=> {
      let { s } = this.state;
      if(s == 19){
        s = 1;
      }else{
        s += 1
      }
      this.setState({
        s
      })
    },200)
  }

  render() {
    const { s } = this.state;
    return(
      <div className={`sprite-rice-bg sprite-rice-${s}`}/>
    )
  }
}


export default Sample;