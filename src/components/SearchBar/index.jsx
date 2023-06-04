//Search component for Navbar
import React from 'react'

//Import CSS
import './index.css';

const SearchComponent = ({handleSearch, setSearchQuery}) => {

  const handleQuery = (e) => {
    setSearchQuery(e.target.value);
  }

    return (
        <form className="d-flex form-search my-2">
            <input
              className="form-control me-2 search"
              type="search"
              id="search-input"
              placeholder="Search"
              aria-label="Search"
              onChange={handleQuery}
            />
            <button
              className="btn btn-outline-success btn-search"
              id="search-button"
              type="submit"
              onClick={handleSearch}
            >
              <span>Search</span>
            </button>
        </form>
    )
};

export default SearchComponent;