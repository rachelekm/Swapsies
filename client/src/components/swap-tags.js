import React from 'react';
import {connect} from 'react-redux';

import './swap-tags.css';

export function SwapTags(props) {
  console.log(props);
  const swap_tags = props.tags.map((tag, index) => (
    <li key={index} className="tags">
      {tag}
    </li>
  ));

  return (
    <ul className="tagList">
      {swap_tags}
    </ul>
  );
}

export default connect()(SwapTags);