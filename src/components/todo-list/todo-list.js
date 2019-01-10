import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ affairs, deleteItem }) => {
  const elements = affairs.map((item) => {
    const { id } = item;

    return (
      <li className="todo-item" key={id}>
        <TodoListItem {...item}
          deleteItem={deleteItem} />
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
