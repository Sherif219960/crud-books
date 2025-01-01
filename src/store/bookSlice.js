import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk('book/getBooks', async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch('http://localhost:4004/books')
        const data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const insertBooks = createAsyncThunk('book/insertBooks', async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch('http://localhost:4004/books', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error.message)
    }

})

export const getSpecificBook = createAsyncThunk('books/getSpecificBook', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch(`http://localhost:4004/books${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)

    }
})

const bookSlice = createSlice({
    name: 'book',
    initialState: { books: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state,) => {
            state.isLoading = true
        })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload

            })
            .addCase(getBooks.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload

            })
            .addCase(insertBooks.pending, (state) => { state.isLoading = true })
            
            .addCase(insertBooks.fulfilled, (state, action) => {
                state.isLoading = false
                state.books.push(action.payload)
            })
            .addCase(insertBooks.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getSpecificBook.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSpecificBook.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload

            })
            .addCase(getSpecificBook.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload

            })

    }

})

export default bookSlice.reducer