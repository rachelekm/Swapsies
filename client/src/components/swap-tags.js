import React from 'react';
import './swap-tags.css';

export default function SwapTags(props) {
      console.log(props);
  return (
    <li className="tag">
      {props.text}
    </li>
  );
};
