import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({}) //criei um contexto, passei um objeto vazio pra inicializar este contexto. Dentro desse contexto UsersContext criei um Provider que vai receber uma lista de elementos props.children, tudo que eu passar dentro do provider vai renderizar aqui e estou disponibilizando um valor, um objeto que tem o state e dentro desse state tenho a lista de usuários

const actions = {
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user], 
        }
    },
    updateUser(state, action) {
        const update = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === update.id ? update : u)
        }
    },
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext

// no atributo state vou passar uma lista de usuários