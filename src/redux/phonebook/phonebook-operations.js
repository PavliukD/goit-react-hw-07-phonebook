import * as actions from './phonebook-actions'
import * as api from '../../services/api/api'

export const getAllContacts = () => async dispatch => {
    dispatch(actions.getAllContactsRequest())

    try {
        const {data} = await api.getAllContacts()
        dispatch(actions.getAllContactsSucces(data))
    } catch (error){
        dispatch(actions.getAllContactsError())
    }
}

export const addContact = (contact) => async dispatch => {
    dispatch(actions.addContactRequest())
    const newContact = {
        name: contact.name,
        phone: contact.number
    }
    try {
        const {data} = await api.addContact(newContact)
        dispatch(actions.addContactSucces(data))
    } catch (error){
        dispatch(actions.addContactError())
    }
}

export const delContact = (id) => async dispatch => {
    dispatch(actions.delContactRequest())

    try {
        const {data} = await api.delContact(id)
        console.log(data)
        dispatch(actions.delContactSucces(data))
    } catch (error){
        dispatch(actions.delContactError)
    }
}