import { getBooks } from "../../store/bookSlice"
import { BookInfo } from "../BookInfo/BookInfo"
import { BooksList } from "../BooksList/BooksList"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const BookContainer = () => {
    const { isLoading, books } = useSelector(state => state.books)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])

    return (
        <>
            <hr className='my-5' />
            <div className="row text-center">
                <div className="col">
                    <BooksList isLoading={isLoading} books={books} />
                </div>
                <div className="col">
                    <BookInfo />
                </div>
            </div>
        </>
    )
}
