import { configureStore } from "@reduxjs/toolkit";
import books from './bookSlice'
import author from './authSlice'

export default configureStore({
    reducer: {
        books,
        author
    }
})