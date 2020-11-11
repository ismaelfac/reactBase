const defaultState = {
    id: 1,
    name: 'XYZ s.a',
    options: [
        {
            id: 1,
            name: 'notifications'
        }
    ]
};

function reducer(state = defaultState, {type, payload}){
switch (type) {
    default:
        return state;
}
}

export default reducer;