export const ADD_SWAP = 'ADD_SWAP';
export const addSwapPosting = () => ({
    type: ADD_SWAP
});

export const EDIT_SWAP = 'EDIT_SWAP';
export const editSwapPosting = () => ({
    type: EDIT_SWAP
});

export const DELETE_SWAP = 'DELETE_SWAP';
export const deleteSwapPosting = () => ({
    type: DELETE_SWAP
});

export const UPDATE_INTEREST = 'UPDATE_INTEREST';
export const updateSwapInterest = interest => ({
    type: UPDATE_INTEREST,
    interest
});

export const FILTER_SEARCH = 'FILTER_SEARCH';
export const filterSearch = search => ({
    type: FILTER_SEARCH,
    search
});