import React from 'react';
import Todos from './Todos';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return id !== todo.id
    })

    this.setState({
      todos: todos
    })
  }
  
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
