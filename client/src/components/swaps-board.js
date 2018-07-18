import React from 'react';
import { connect } from 'react-redux';
import SwapInfo from './swap-info'

import './swap-board.css';


export function SwapsBoard(props) {
  const swaps = props.availableSwaps.map((swap, index) => (
    <li key={index} className='swapCard'>
      <SwapInfo {...swap}/>
    </li>
  ));

  return (
    <ul id="swapsBoard">
      {swaps}
    </ul>
  );
}

const mapStateToProps = state => ({
  availableSwaps: state.availableSwaps
});

export default connect(mapStateToProps)(SwapsBoard);