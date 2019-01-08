import React from 'react';

const TodoListBtns = ({ doImportant }) => {
  return (
    <div className="todo-list-btns">
      <div className="todo-list-btn --done"></div>
      <div className="todo-list-btn --important" onClick={doImportant}></div>
    </div>
  )
};

export default TodoListBtns;