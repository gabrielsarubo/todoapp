import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
      // OR => content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo;