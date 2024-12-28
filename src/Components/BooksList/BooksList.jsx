import { Loading } from "../Loading/Loading"


export const BooksList = ({ isLoading, books }) => {
    console.log(books)
    const bookList = books.length > 0 ? books.map(item =>
        <div key={item.id}>
            <li className="list-group-item mb-2 gap-3 d-flex justify-content-between align-items-center">
                <div>{item.title}</div>
                <div className="btn-group gap-2">
                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </li>
        </div>
    ) : <div className="alert alert-warning alert-dismissible text-capitalize fade show" role="alert"> <strong>Warning!</strong> there is no book to Show .  </div>


    return (
        <>
            <h2>Books List</h2>
            {isLoading ? <Loading />
                : <ul className="list-group">
                    {bookList}
                </ul>}

        </>
    )
}
