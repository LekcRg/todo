import React from 'react';

import TodoListBtns from '../todo-list-btns/todo-list-btns';

class TodoListItem extends React.Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false,
    };

    this.doDoneLabel = () => {
      this.setState(({ done }) => {
        return {
          done: !done,
        }
      });
    };

    this.doImportant = () => {
      this.setState(({ important }) => {
        return {
          important: !important,
        }
      });
    }
  };

  render() {
    const { label } = this.props
    let className = `todo-item__text-container`;

    if (this.state.important) className += ' --important';
    if (this.state.done) className += ' --done'

    return (
      <span className={className}>
        <span className="todo-item__text"
          onClick={this.doDoneLabel}>{label}</span>

        <TodoListBtns doImportant={this.doImportant} />
      </span>
    );
  }
}

export default TodoListItem;