import { createAction } from '@reduxjs/toolkit'

// const addContact = createAction('phonebook/addContact', (contact) => {
//     return {
//         payload:{
//             name: contact.name,
//             phone: contact.number
//         }
//     }
// })
// const delContact = createAction('phonebook/delContact')



// const actions = {addContact, delContact, filterContacts}
// export default actions


export const getAllContactsRequest = createAction('phonebook/getAllContactsRequest')
export const getAllContactsSucces = createAction('phonebook/getAllContactsSucces')
export const getAllContactsError = createAction('phonebook/getAllContactsError')

export const addContactRequest = createAction('phonebook/addContactRequest')
export const addContactSucces = createAction('phonebook/addContactSucces')
export const addContactError = createAction('phonebook/addContactError')

export const delContactRequest = createAction('delContactRequest')
export const delContactSucces = createAction('phonebook/delContactSucces')
export const delContactError = createAction('phonebook/delContactError')

export const filterContacts = createAction('phonebook/filterContacts')