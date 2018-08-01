export const ADD_SWAP = 'ADD_SWAP';
export const addSwapPosting = (values) => ({
    type: ADD_SWAP,
    values: values
});

export const EDIT_SWAP = 'EDIT_SWAP';
export const updateSwap = (values, index) => ({
    type: EDIT_SWAP,
    values: values,
    location: index
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

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateUserInfo = (values) => ({
    type: UPDATE_PROFILE,
    updates: values
});


export const EDIT_INFO = 'EDIT_INFO';
export const toggleEditInfo = (location, index) => ({
    type: EDIT_INFO,
    location: location,
    index: index
});

export const DELETE_SWAP = 'DELETE_SWAP';
export const deleteSwapPost = (index) => ({
    type: DELETE_SWAP,
    index: index.index
});


export const FILTER_SEARCH = 'FILTER_SEARCH';
export const filterSearch = search => ({
    type: FILTER_SEARCH,
    query: search
});
