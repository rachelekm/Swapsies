import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import SearchFilter from './search-filter';
import SwapInfo from './swap-info';
import SwapInfoInterested from './swap-info-interested';
import SwapInfoMatch from './swap-info-match';
import RequiresAuth from './requires-login';
import { toggleComponent } from '../actions/actions';

export class MatchesBoard extends React.Component {

  toggleContact(index){
    console.log(index);
      this.props.dispatch(toggleComponent(index));
  }

  render() {
    console.log(this.props.availableSwaps);
    console.log(this.props.toggleStatus);

    const matches = this.props.availableSwaps.map((swap, index) => (
      (swap.interested === true && swap.interestReturned === true) && 
        (this.props.toggleStatus.status === true && this.props.toggleStatus.location === index ?
          (<div className='matchBox' key={index}>
            <li key={index} className='swapCard'>
                <SwapInfoMatch swap={swap} index={index}/>
            </li>
              <button 
              type="button"
              id="swapButtonMatch" 
              className="button"
              onClick={() => this.toggleContact(index)}>
                Close Contact Info
              </button>
              <div className='matchContact'>
                {swap.swapTitle}
                Phone: 555-555-5555
                Email: someEmail@email.com
              </div>
        </div>)
          :
        (<div className='matchBox' key={index}>
          <li key={index} className='swapCard'>
            <SwapInfoMatch swap={swap} index={index}/>
          </li>
          <button 
          type="button"
          id="swapButtonMatch" 
          className="button"
          onClick={() => this.toggleContact(index)}>
            Contact for Swap
          </button>
        </div>)
        )
    ));

    return (
      <div>
        <Header />
        <main role="main">
        <SearchFilter />
        <ul id="swapsBoard">
          {matches}
        </ul>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
  availableSwaps: state.app.availableSwaps,
  toggleStatus: state.app.toggleStatus,
  username: state.auth.currentUser.username,
  name: `${currentUser.firstName} ${currentUser.lastName}`
};
};

export default RequiresAuth()(connect(mapStateToProps)(MatchesBoard));