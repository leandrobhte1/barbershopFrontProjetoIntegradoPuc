// Action Creator
export function changeSearch(event) {
    return {
        type: 'SEARCH_CHANGED',
        payload: event.target.value
    }
}