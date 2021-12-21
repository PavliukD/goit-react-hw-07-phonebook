import { createReducer } from '@reduxjs/toolkit'
import * as actions from './phonebook-actions'



const itemsReducer = createReducer([], {
   [actions.getAllContactsSucces]: (_, action) => action.payload,
   [actions.addContactSucces]: (state, action) => {
        if (state.some(contact => {
            return contact.name.toLowerCase() === action.payload.name.toLowerCase()
        })){
            alert(`${action.payload.name} is already in cotacts`)
            return state
        }
        return [...state, action.payload]
   },
   [actions.delContactSucces]: (state, action) => state.filter(contact => contact.id !== action.payload.id),  
})

const loadingReducer = createReducer(false, {
    [actions.getAllContactsRequest]: () => true,
    [actions.getAllContactsSucces]: () => false,
    [actions.getAllContactsError]: () => false, 
    [actions.getAllContactsRequest]: () => true,
    [actions.getAllContactsSucces]: () => false,
    [actions.getAllContactsError]: () => false,
    [actions.delContactRequest]: () => true,
    [actions.delContactSucces]: () => false,
    [actions.delContactError]: () => false
})


const filterReducer = createReducer('', {
    [actions.filterContacts]: (state, action) => action.payload,
})


export {itemsReducer, filterReducer, loadingReducer}

