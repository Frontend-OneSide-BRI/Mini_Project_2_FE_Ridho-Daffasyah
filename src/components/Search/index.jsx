//Search component for Navbar
import React from 'react'

//Import CSS
import './index.css';

const SearchComponent = () => {
    return (
        <form className="d-flex form-search my-2">
            <input
              className="form-control me-2 search"
              type="search"
              id="search-input"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-search"
              id="search-button"
              type="submit"
            >
              <span>Search</span>
            </button>
        </form>
    )
};

export default SearchComponent;