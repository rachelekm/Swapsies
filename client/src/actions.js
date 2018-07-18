export const ADD_SWAP = 'ADD_SWAP';
export const addSwapPosting = () => ({
    type: ADD_SWAP
});

export const FILTER_SEARCH = 'FILTER_SEARCH';
export const filterSearch = search => ({
    type: FILTER_SEARCH,
    search
});