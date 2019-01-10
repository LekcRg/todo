import React from 'react';

const TodoListBtns = ({ doImportant, deleteItem, id }) => {
  return (
    <div className="todo-list-btns">
      <div className="todo-list-btn --done" onClick={() => { deleteItem({ id }); }}></div>
      <div className="todo-list-btn --important" onClick={doImportant}></div>
    </div >
  )
};

export default TodoListBtns;