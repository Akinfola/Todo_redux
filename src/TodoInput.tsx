import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === '') return;
    dispatch(addTodo(text.trim()));
    setText('');
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo..."
        style={{ padding: '6px 8px', marginRight: 8 }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
