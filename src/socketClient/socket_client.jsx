import React, { Component } from 'react'
import io from 'socket.io-client';
import './socket_client.css'


class  SocketClient extends Component {
  constructor(){
    super();
    this.message = io.connect('http://localhost:8000/message')
    this.state = {
      userName: '',
      messageList: [],
      str: ''
    }
  }
  componentWillMount(){
    this.message.on('getMessage', data => {
      const { messageList } = this.state;
      messageList.push(data)
      this.setState({
        messageList
      })
    })
  }
  inputStr = e => {
    this.setState({
      str: e.target.value
    })
  }

  submitStr = e => {
    this.message.emit('setMessage',{msg: this.state.str, userName: this.state.userName}, data => {
      debugger;
      const { messageList } = this.state;
      messageList.push(data);
      this.setState({
        messageList
      })
    })
    this.setState({
      str:''
    })
  }

  ensure = e => {
    if(e.keyCode == 13){
      const name = this.refs.nameInput.value;
      if(name){
        this.setState({
          userName: name
        })
      }
    }
  }
  selfItem = (data, i) => 
      <div key={i} className="chat-item-wrap">
        <div className="chat-item-info-self">
          <div className="chat-item-name">{data.userName}</div>
          <div className="chat-item-content">{data.msg}</div>
        </div>
        <div className="chat-item-head">{data.userName.slice(0,1)}</div>
      </div>

  otherItem = (data, i) => 
      <div key={i} className="chat-item-wrap">
        <div className="chat-item-head">{data.userName.slice(0,1)}</div>
        <div className="chat-item-info">
          <div className="chat-item-name">{data.userName}</div>
          <div className="chat-item-content">{data.msg}</div>
        </div>
      </div>

  render() {
    const { userName } = this.state;

    return(
      userName ?
      <div className="chat-body">
        <div className="chat-content-wrap">
          {
            this.state.messageList.map((data,i) => {
              const isSelf = data.userName == this.state.userName;
              return (
                <div key={i} className="chat-item-wrap">
                  <div className={isSelf ? "chat-item-triangle-self" : "chat-item-triangle"}><span/></div>
                  {!isSelf && <div className="chat-item-head">{data.userName.slice(0,1)}</div>}
                  <div className={isSelf ? "chat-item-info-self" : "chat-item-info"}>
                    <div className="chat-item-name">{data.userName}</div>
                    <div className="chat-item-content">{data.msg}</div>
                  </div>
                  {isSelf && <div className="chat-item-head">{data.userName.slice(0,1)}</div>}
                </div>
              )
            })
          }
        </div>
        <div className="chat-action-wrap">
          <input value={this.state.str} onChange={this.inputStr}/>
          <div onClick={this.submitStr} className="chat-action-submit">submit</div>
        </div>
      </div>
      :
      <div onKeyDown={this.ensure} className="set-name-wrap">
        <input ref="nameInput"/>
      </div>
    )
  }
}

export default  SocketClient