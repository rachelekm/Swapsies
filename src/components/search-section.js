import React from 'react';

import SearchFilter from './search-filter';
import SearchFeedback from './search-feedback';

export default function SearchSection(props) {

  return (
    <section aria-labelledby="filterSwaps" aria-describedby="filterSwaps">
      <SearchFilter />
      <SearchFeedback />
    </section>
  );
}
