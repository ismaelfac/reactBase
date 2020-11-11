const defaultState = [
    {
        id: 1,
        name: 'Inicio',
        link: 'home'
    },
    {
        id: 2,
        name: 'Perfil',
        link: 'profile'
    }
];

function reducer(state = defaultState, {type, payload}){
switch (type) {
    default:
        return state;
}
}

export default reducer;