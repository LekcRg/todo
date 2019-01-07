import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const className = `todo-item__text${important ? ' important' : ''}`

  return <span className={className}>{label}</span>;
}

export default TodoListItem;