import React from 'react';
import { connect } from 'react-redux';

import { filterSearch } from '../actions';

export class SearchBar extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const value = this.input.value;
    this.props.dispatch(filterSearch(value));
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="swapSearch"
          id="swapSearch"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="Search"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="searchButton" 
          className="button"
        >
          Search
        </button>
      </form>
    );
  }
}

export default connect ()(SearchBar);