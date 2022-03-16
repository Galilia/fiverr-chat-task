import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.scss';

const InputForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form className="controls">
      <input
        placeholder="Say something"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={(event) => props.addMessage(inputValue, event)}>Send</button>
    </form>
  );
};

export default InputForm;
