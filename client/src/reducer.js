import {ADD_SWAP, FILTER_SEARCH} from './actions';

const initialState = {
    availableSwaps: [{swapTitle: 'Restaurant 1', description: '2 bowls of Rice and beans and chips', tags: ['mexican', 'vegan']}, {swapTitle: 'Restaurant 2', description: '2 chicken pot pies: has potatoes, carrots, and leeks', tags: ['american', 'fast food']}],
    userSwaps: [],
    matches: [],
    search: []
};

export default (state = initialState, action) => {
    if (action.type === ADD_SWAP) {
        return Object.assign({}, state, {
    		userSwaps: [{swapTitle: 'new swap TEST', tags: ['mexican', 'vegan']}]
        });
    }

    if (action.type === FILTER_SEARCH) {
        let query;
        query = action.search;
        console.log(query);
        return Object.assign({}, state, {
            search: [...state.search, query]
        });
    }

    return state;
};
