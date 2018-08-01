import * as actions from '../actions/actions';

const initialState = {
    availableSwaps: [
    {swapTitle: 'Restaurant 1', description: '2 bowls of Rice and beans and chips', tags: [{type: 'mexican'}, {type: 'vegan'}], interested: true, interestReturned: false}, 
    {swapTitle: 'Restaurant 2', description: '2 chicken pot pies: has potatoes, carrots, and leeks',  , interested: false, interestReturned: false},
    {swapTitle: 'Restaurant 3', description: '7,000 burritos', tags: [{type: 'mexican'}, {type: 'fast food'}], interested: true, interestReturned: true},
    {swapTitle: 'Restaurant 4', description: '7,000 burritos', tags: [{type: 'mexican'}, {type: 'fast food'}], interested: true, interestReturned: true}

    ],
    userSwaps: [{description: '2 bowls of Rice and beans and chips', tags: [{type: 'mexican'}, {type: 'vegan'}]}], 
    user: {username: 'username', userFirstName: 'Bob', userLastName: 'Belcher', userID: 123456, affiliationName: 'Bobs Burgers', affiliationContact: '555-555-5555 ', affiliationAddress: '123 Main St, San Fran, CA 12345'},
    matches: [],
    filter: [],
    toggleStatus: {status: false, location: null},
    editStatus: [{status: false, location: 'accountInfo'}, {status: false, location: 'swapHistory', index: null}],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    if (action.type === actions.ADD_SWAP) {
        const tagsArray = action.values.mealCategories.map(cat => (
                 {type: cat.value}
            ));
        if(action.values.mealType){
            tagsArray.push({type: action.values.mealType});
        }
        /*add to available swaps for api */
        return Object.assign({}, state, {
    		userSwaps: [...state.userSwaps, {
                swapTitle: state.user.affiliationName,
                description: action.values.mealSummary,
                tags: tagsArray,
                interestReturned: []
            }]
        });
    }

    if (action.type === actions.EDIT_SWAP) {
        console.log('in reducer');
        console.log(action);
        const tagsArray = action.values.mealCategories.map(cat => (
            {type: cat.value}
        ));
        return Object.assign({}, state, {
            userSwaps: state.userSwaps.map((swap, index) => {
                if (index === action.location) {
                    return {
                        description: action.values.mealSummary,
                        tags: tagsArray
                        }
                }
                else {return swap}
            })
        });
    }

    if (action.type === actions.DELETE_SWAP) {
        return Object.assign({}, state, {
            userSwaps: state.userSwaps.filter(swap => {
                if (state.userSwaps.indexOf(swap) === action.index) {
                    console.log('in here');
                    return false;
                }
                else {return true}
            })
        });
    }

    if (action.type === actions.TOGGLE) {
        let toggleValue = !state.toggleStatus.status;
        return Object.assign({}, state, {
            toggleStatus: {status: 
            toggleValue,
            location: action.location}
        }); 
    }

    if (action.type === actions.REMOVE_INTEREST) {
        return Object.assign({}, state, {
            availableSwaps: state.availableSwaps.map((swap, index) => {
                if (index === action.location) {
                    return {...swap, interested: false}
                }
                else {return swap}
            })
        }); 
    }

    if (action.type === actions.UPDATE_INTEREST) {
        return Object.assign({}, state, {
            availableSwaps: state.availableSwaps.map((swap, index) => {
                if (index === action.location) {
                    return {...swap, interested: true}
                }
                else {return swap}
            })
        }); 
    }

    if (action.type === actions.FILTER_SEARCH) {
        let query;
        console.log(action.query);
        query = action.query.textSearch.split(', ');
        if(action.query.mealType){
            query.push(action.query.mealType);
        }
        console.log(query);

        return Object.assign({}, state, {
            filter: [...state.filter, query]
        });
    }

    if (action.type === actions.EDIT_INFO) {
        console.log(action);
        return Object.assign({}, state, {
            editStatus: state.editStatus.map((object) => {
                let updatedStatus = !object.status
                if (object.location === action.location) {
                    if(!action.index){
                        return {...object, status: updatedStatus}
                    }
                    else {
                        return {...object, status: updatedStatus, index: action.index.index}
                    }
                }
                else {return object}
            })
        }); 
    }

    if (action.type === actions.UPDATE_PROFILE) {
        return Object.assign({}, state, {
            user: {...action.updates}
        });
    }

    if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });

    }

    return state;
};
