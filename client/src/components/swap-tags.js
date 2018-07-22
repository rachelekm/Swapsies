import React from 'react';
import './swap-tags.css';

export default function SwapTags(props) {
  console.log(props);
  return (
    <li key={props.index} className="tag">
       {props.type}
    </li>
  );
};

SwapTags.defaultProps = {
    type: ''
};
