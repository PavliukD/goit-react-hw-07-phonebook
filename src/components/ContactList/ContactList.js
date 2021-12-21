import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import s from './ContactList.module.css'
import {getContacts} from '../../redux/phonebook/phonebook-selectors'
import * as operations from '../../redux/phonebook/phonebook-operations'


export default function ContactList(){

    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(operations.getAllContacts())
    }, [dispatch])


 

    function onDelete(id){
        dispatch(operations.delContact(id))
    }

    const contacts = useSelector(getContacts)

    return(
        <ul className = {s.list}>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id} id = {contact.id} className = {s.item}>
                        <p>{contact.name}: {contact.phone}</p>
                        <button onClick={() => onDelete(contact.id)} className = {s.button}>Delete</button>
                    </li>
                )
            })}
        </ul>

    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
}

