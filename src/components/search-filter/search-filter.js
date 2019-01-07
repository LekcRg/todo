import React from 'react';

const SearchFilter = () => {
  return (
    <div className="search-filter">
      <div className="search-filter__item active">All</div>
      <div className="search-filter__item">Active</div>
      <div className="search-filter__item">Done</div>
    </div>
  )
}

export default SearchFilter;