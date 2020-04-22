import React, { Component } from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import List from '../components/List';

const TodoWrapper = styled.div`
  background: white;
  max-width: 512px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 0 auto;
  margin-bottom: 2rem;
`

class TodoTemplate extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: '',
      todos: [
        { id: 0, text: 'todo test', done: false}
      ],
      index: 0,
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleCreate = () => {
    if(!this.state.input) return;

    const { input, todos, index } = this.state;
    let newTodos = todos;
    newTodos[index] = {
      'id': index+1,
      'text': input,
      'done': false,
    };
    this.setState({todos: newTodos, index: index+1});
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    let newTodos = todos;
    newTodos[id] = {
      ...todos[id],
      'done': !todos[id].done,
    }
    this.setState({todos: newTodos});
  }

  handleRemove = (id) => {
    const { todos, index } = this.state;
    let newTodos = todos.filter(task => task.id !== id);
    this.setState({todos: newTodos, index: index-1});
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleKeyPress, handleCreate, handleRemove, handleToggle } = this;

    return (
      <TodoWrapper>
        <Form
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onClick={handleCreate}
        />
        <List 
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoWrapper>
    );
  }
}

export default TodoTemplate;