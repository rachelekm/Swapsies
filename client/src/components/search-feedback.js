import React from 'react';
import {connect} from 'react-redux';

export function SearchFeedback(props) {
  console.log(props);
    const isPlural = props.swapsCount !== 1;
    const grammarCheck1 = isPlural ? 'are' : 'is';
    const grammarCheck2 = isPlural ? 'swaps' : 'swap';

    return (
        <h2 id="swapsFeedback"      
        aria-live="assertive"
        aria-atomic="true">
            There {grammarCheck1} <span id="swapsCount">{props.swapsCount}</span> {grammarCheck2} available:
        </h2>
    );
}

const mapStateToProps = state => ({
    swapsCount: state.app.availableSwaps.length
});


export default connect(mapStateToProps)(SearchFeedback);
