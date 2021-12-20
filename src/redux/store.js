import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {itemsReducer, filterReducer} from "./phonebook/phonebook-reducers"


const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})



const store = configureStore({
    reducer: rootReducer,
})


export {store}