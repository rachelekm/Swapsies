import React from 'react';

import SearchBar from './search-bar';
import SearchFilter from './search-filter';
import SearchFeedback from './search-feedback';

export default function SearchSection(props) {

  return (
    <section aria-labelledby="filterSwaps" aria-describedby="filterSwaps">
      <SearchBar />
      <SearchFilter />
      <SearchFeedback />
    </section>
  );
}
