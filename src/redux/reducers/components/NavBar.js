const defaultState = {
    id: 1,
    name: 'XYZ s.a',
    options: [
        {
            id: 1,
            name: 'Inicio',
            link: 'home'
        },
        {
            id: 2,
            name: 'Nosotros',
            link: 'about'
        },
        {
            id: 3,
            name: 'Inmuebles',
            link: 'properties'
        },
        {
            id: 4,
            name: 'Servicios',
            link: 'servicies'
        },
        {
            id: 5,
            name: 'Equipo de Trabajo',
            link: 'teams'
        },
        {
            id: 6,
            name: 'Contacto',
            link: 'contact'
        },
        {
            id: 7,
            name: 'Blog',
            link: 'blog'
        }
    ],
    iconStart: false
};

function reducer(state = defaultState, {type, payload}){
switch (type) {
    default:
        return state;
}
}

export default reducer;