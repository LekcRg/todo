import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ affairs }) => {
  const elements = affairs.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="todo-item" key={id}>
        <TodoListItem {...itemProps} />
      </li>
    )
  })

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
