import axios from "axios"


const api = axios.create({
    baseURL: 'https://61bdb5d12a1dd4001708a0fa.mockapi.io/'
})

export async function getAllContacts(){
    try {
        return api.get('contacts')
    } catch (error){
        return error
    }
}

export async function addContact(contact){
    try{
        return api.post('contacts', contact)
    } catch (error){
        return error
    }
}

export async function delContact(id){
    try{
        return api.delete(`contacts/${id}`)
    } catch (error) {
        return error
    }
}