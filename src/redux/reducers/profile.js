const defaultState = {
        id: 1,
        fullName: 'Ismael Enrique Lastre Alvarez',
        role: 'SuperAdmin'
};

function reducer(state = defaultState, {type, payload}){
    switch (type) {
        case 'findProfile': {
            return {
                    id: 2,
                    fullName: 'Pepito Perez',
                    role: 'Administrador'
            };
        }
        default:
            return state;
    }
}

export default reducer;