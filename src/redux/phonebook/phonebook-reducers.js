import { createReducer } from '@reduxjs/toolkit'
import * as actions from './phonebook-actions'
import * as operations from './phonebook-operations'



const itemsReducer = createReducer([], {
   [operations.getAllContacts.fulfilled]: (_, action) => action.payload,
   [operations.addContact.fulfilled]: (state, action) => {
        if (state.some(contact => {
            return contact.name.toLowerCase() === action.payload.name.toLowerCase()
        })){
            alert(`${action.payload.name} is already in cotacts`)
            return state
        }
        return [...state, action.payload]
   },
   [operations.delContact.fulfilled]: (state, action) => state.filter(contact => contact.id !== action.payload.id),  
})

const loadingReducer = createReducer(false, {
    [operations.getAllContacts.pending]: () => true,
    [operations.getAllContacts.fulfilled]: () => false,
    [operations.getAllContacts.rejected]: () => false, 
    [operations.getAllContacts.pending]: () => true,
    [operations.getAllContacts.fulfilled]: () => false,
    [operations.getAllContacts.rejected]: () => false,
    [operations.delContact.pending]: () => true,
    [operations.delContact.fulfilled]: () => false,
    [operations.delContact.rejected]: () => false
})


const filterReducer = createReducer('', {
    [actions.filterContacts]: (state, action) => action.payload,
})


export {itemsReducer, filterReducer, loadingReducer}

