const defaultState = {
        id: 1,
        fullName: 'Ismael Enrique Lastre Alvarez',
        role: 'SuperAdmin',
        modules: [
            {
                id: 1,
                name: 'profile'
            }
        ]
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
        case 'editProfile': {
            return 'Profile editado con exito';
        }
        default:
            return state;
    }
}

export default reducer;