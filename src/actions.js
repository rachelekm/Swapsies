export const ADD_SWAP = 'ADD_SWAP';
export const addSwapPosting = (values) => ({
    type: ADD_SWAP,
    values: values
});

export const TOGGLE = 'TOGGLE';
export const toggleComponent = index => ({
    type: TOGGLE,
    location: index
});

export const UPDATE_INTEREST = 'UPDATE_INTEREST';
export const updateSwapInterest = index => ({
    type: UPDATE_INTEREST,
    location: index
});

export const REMOVE_INTEREST = 'REMOVE_INTEREST';
export const noLongerInterested = index => ({
    type: REMOVE_INTEREST,
    location: index
});



export const EDIT_SWAP = 'EDIT_SWAP';
export const editSwapPosting = () => ({
    type: EDIT_SWAP
});

export const DELETE_SWAP = 'DELETE_SWAP';
export const deleteSwapPosting = () => ({
    type: DELETE_SWAP
});


export const FILTER_SEARCH = 'FILTER_SEARCH';
export const filterSearch = search => ({
    type: FILTER_SEARCH,
    query: search
});