import React from 'react';
import styled from 'styled-components';

const TodoAdder = styled.div`
  padding: 1rem;
  border-bottom: 1px solid lightgrey;
  display: flex;
`;

const TextBox = styled.input`
  width: 100%
`;


const Form = (props) => {
  return (
    <TodoAdder>
      <TextBox
        type="text"
        value={props.input}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
      <input
        type="button"
        value="Add"
        onClick={props.onClick}
      />
    </TodoAdder>
  );
};

export default Form;