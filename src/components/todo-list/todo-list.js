import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import TodoListBtns from '../todo-list-btns/todo-list-btns';

const affairs = [
  {
    label: 'First element',
    important: false,
    id: 1,
  },
  {
    label: 'Second element',
    important: true,
    id: 2,
  },
  {
    label: 'Third element',
    important: false,
    id: 3,
  },
]

const elements = affairs.map((item) => {
  const { id, ...itemProps } = item;

  return (
    <li className="todo-item" key={id}>
      <TodoListItem {...itemProps} />
      <TodoListBtns />
    </li>
  )
})

const TodoList = () => {
  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
