export const changeSearch = event => ({
    type: 'SEARCH_CHANGED',
    payload: event.target.value
})