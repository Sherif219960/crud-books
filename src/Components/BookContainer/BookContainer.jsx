import { deleteBook, getBooks } from "../../store/bookSlice"
import { BookInfo } from "../BookInfo/BookInfo"
import { BooksList } from "../BooksList/BooksList"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const BookContainer = () => {
    const { isLoading, books } = useSelector(state => state.books)
    const dispatch = useDispatch()
    const [selectedBook, setSelectedBook] = useState({})

    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])

    const getBookId = (id) => {
        const bookDetails = books.find(item => item.id == id)
        setSelectedBook(prev => { return { ...prev, ...bookDetails } })
    }

    return (
        <>
            <hr className='my-5' />
            <div className="row text-center">
                <div className="col">
                    <BooksList isLoading={isLoading} books={books} dispatch={dispatch} deleteBook={deleteBook} getBookId={getBookId} />
                </div>
                <div className="col">
                    <BookInfo info={selectedBook} />
                </div>
            </div>
        </>
    )
}
