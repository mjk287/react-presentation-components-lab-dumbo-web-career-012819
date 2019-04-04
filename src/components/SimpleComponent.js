// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  clickHanlder = (e) => {
    if (this.state.mood === 'happy') {
    this.setState({
      mood: 'sad'
    })
  } else {
    this.setState({
      mood: 'happy'
    })
  }
  }
  

  render() {
    return (
      <div onClick={this.clickHanlder}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
