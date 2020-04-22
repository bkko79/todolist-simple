import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  padding: 1rem;
`

const TodoItem = styled.div`
  padding: 0.5rem;
  text-decoration: ${props => props.todoDone ? "line-through" : "none"};
`

const CancelX = styled.button`
  color: red;
  font-weight: 600;
  float: right;
`

const List = ({todos, onRemove, onToggle}) => {
  const list = todos.map((todo, i) => (
    <TodoItem 
      todoDone={todo.done} 
      key={i} 
      onClick={(e) => {e.stopPropagation();onToggle(todo.id)}}
    >
      {todo.text}
      <CancelX 
        onClick={(e) => {e.stopPropagation();onRemove(todo.id)}}
      >
        x
      </CancelX>
    </TodoItem>
  ))

  return (
    <ListWrapper>
      {list}
    </ListWrapper>
  );
};

export default List;