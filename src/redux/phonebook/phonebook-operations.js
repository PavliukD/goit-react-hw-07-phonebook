import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/api/api'


export const getAllContacts = createAsyncThunk(
    'phonebook/getAllContacts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await api.getAllContacts()
            return data
        } catch (error){
            return rejectWithValue(error)
        }
    }
)

export const addContact = createAsyncThunk(
    'phonebook/addContact',
    async (contact, {rejectWithValue}) => {
        const newContact = {
            name: contact.name,
            phone: contact.number
        }
        try {
            const {data} = await api.addContact(newContact)
            return data
        } catch (error){
            return rejectWithValue(error)
        }  
    }
)

export const delContact = createAsyncThunk(
    'phonebook/delContact',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await api.delContact(id)
            return data
        } catch (error){
            return rejectWithValue(error)
        }
    }
)
