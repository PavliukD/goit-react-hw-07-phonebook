import { usePatchesInScope } from "@reduxjs/toolkit/node_modules/immer/dist/internal"


function getAllContacts(){
    return fetch('https://61bdb5d12a1dd4001708a0fa.mockapi.io/')
}

function addContact(contact){
    fetch('https://61bdb5d12a1dd4001708a0fa.mockapi.io/contacts',
    {
        method: PATCH,
    })
}