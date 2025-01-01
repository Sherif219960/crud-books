import { useSelector } from "react-redux"

export const BookInfo = () => {
    const { books, isLoading } = useSelector(state => state.books)
    console.log(books[1])
    return (
        <>
            <h2>Book Details</h2>

            <div className="alert alert-secondary" role='alert'>
                three is no post selected yet. please select!
            </div>
            {/* <div>
                <p className="fw-bolder">title</p>
                <p className="fw-bolder">description</p>
                <p className="fw-bolder">price</p>
            </div> */}
        </>
    )
}
