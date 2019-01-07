import React from 'react';
import ReactDOM from 'react-dom';

import './base/fonts.scss';
import './base/base.scss';
import './components/app-header/app-header.scss'
import './components/search-panel/search.scss';
import './components/search-panel/search-panel.scss';
import './components/todo-list/todo-list.scss';
import './components/todo-list-item/todo-list-item.scss';
import './components/todo-list-btns/todo-list-btns.scss';
import './components/search-filter/search-filter.scss';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import SearchFilter from './components/search-filter/search-filter';

const App = () => {
  return (
    <div className="container">
      <AppHeader />
      <div className="search">
        <SearchPanel />
        <SearchFilter />
      </div>
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
