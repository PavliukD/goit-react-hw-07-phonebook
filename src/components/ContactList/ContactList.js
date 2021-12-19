import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import s from './ContactList.module.css'
import actions from '../../redux/phonebook/phonebook-actions'
import {getContacts} from '../../redux/phonebook/phonebook-selectors'

export default function ContactList(){
    fetch('https://61bdb5d12a1dd4001708a0fa.mockapi.io/').then(data => console.log(data))
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()
 
    return(
        <ul className = {s.list}>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id} id = {contact.id} className = {s.item}>
                        <p>{contact.name}: {contact.number}</p>
                        <button onClick={() => dispatch(actions.delContact(contact.id))} className = {s.button}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
}