import React from 'react';

import '../../base/fonts.scss';
import '../../base/base.scss';
import '../app-header/app-header.scss'
import '../search-panel/search.scss';
import '../search-panel/search-panel.scss';
import '../todo-list/todo-list.scss';
import '../todo-list-item/todo-list-item.scss';
import '../todo-list-btns/todo-list-btns.scss';
import '../search-filter/search-filter.scss';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import SearchFilter from '../search-filter/search-filter';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      affairs: [
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
      ],
    };

    this.deleteItem = ({ id }) => {
      const el = this.state.affairs.find((el) => el.id === id),
        currentId = this.state.affairs.indexOf(el),
        newAffair = [
          ...this.state.affairs.slice(0, currentId),
          ...this.state.affairs.slice(currentId + 1),
        ];

      this.setState(() => {
        return {
          affairs: newAffair,
        }
      });
    };
  }

  render() {
    return (
      <div className="container">
        <AppHeader />
        <div className="search">
          <SearchPanel />
          <SearchFilter />
        </div>
        <TodoList
          affairs={this.state.affairs}
          deleteItem={this.deleteItem} />
      </div>
    );
  };

}

// const App = () => {
  // return (
  //   <div className="container">
  //     <AppHeader />
  //     <div className="search">
  //       <SearchPanel />
  //       <SearchFilter />
  //     </div>
  //     <TodoList
  //       affairs={affairs}
  //       deleteItem={deleteItem} />
  //   </div>
  // );
// };

// export default App;
