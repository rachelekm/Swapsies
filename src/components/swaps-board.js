import React from 'react';
import { connect } from 'react-redux';
import SwapInfo from './swap-info';
import SwapInfoInterested from './swap-info-interested';
import SwapInfoMatch from './swap-info-match';

import './swap-board.css';


export class SwapsBoard extends React.Component {
  render() {
    console.log(this.props);
    const swaps = this.props.availableSwaps.map((swap, index) => (
      (swap.interestReturned === true ?
        (<li key={index} className='swapCard'>
          <SwapInfoMatch {...swap}/>
        </li>)
      :
      (swap.interested === true ?
        (<li key={index} className='swapCard'>
          <SwapInfoInterested {...swap}/>
        </li>)
        :
        (<li key={index} className='swapCard'>
          <SwapInfo {...swap}/>
        </li>
      )))
    ));

    return (
      <ul id="swapsBoard">
        {swaps}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  availableSwaps: state.app.availableSwaps
});

export default connect(mapStateToProps)(SwapsBoard);