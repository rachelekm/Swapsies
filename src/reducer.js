import * as actions from './actions';

const initialState = {
    availableSwaps: [
    {swapTitle: 'Restaurant 1', description: '2 bowls of Rice and beans and chips', tags: [{type: 'mexican'}, {type: 'vegan'}], interested: true, interestReturned: false}, 
    {swapTitle: 'Restaurant 2', description: '2 chicken pot pies: has potatoes, carrots, and leeks', tags: [{type: 'american'}, {type: 'fast food'}], interested: false, interestReturned: false},
    {swapTitle: 'Restaurant 3', description: '7,000 burritos', tags: [{type: 'mexican'}, {type: 'fast food'}], interested: true, interestReturned: true}
    ],
    userSwaps: {}, 
    user: {username: 'username', userFirstName: 'Bob', userLastName: 'Belcher', userID: 123456, restaurant: {affiliationName: 'Bobs Burgers', contact: '555-555-5555 ', address: '123 Main St, San Fran, CA 12345'}},
    matches: [],
    search: []
};

export default (state = initialState, action) => {
    if (action.type === actions.ADD_SWAP) {
        console.log(action);
        const tagsArray = action.values.mealCategories.map(cat => (
                 cat.value
            ));
        return Object.assign({}, state, {
    		userSwaps: [...state.userSwaps, {
                swapTitle: state.user.restaurant.affiliationName,
                description: action.values.mealSummary,
                tags: [action.values, {tagsArray}]
            }]
        });
    }

    if (action.type === actions.FILTER_SEARCH) {
        let query;
        query = action.search;
        console.log(query);
        return Object.assign({}, state, {
            search: [...state.search, query]
        });
    }

    return state;
};
