import * as operations from './phonebook-operations'

export const getContacts = state => {
    const contacts = operations.getAllContacts()
    console.log(contacts)
    // return contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()))
}

export const getFilter = state => state.filter