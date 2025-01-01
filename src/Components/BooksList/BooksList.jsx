import { useSelector } from "react-redux"
import { Loading } from "../Loading/Loading"
// import { getSpecificBook } from "../../store/bookSlice"


export const BooksList = ({ isLoading, books, dispatch, deleteBook }) => {

    const { isLogedIn } = useSelector(state => state.author)

    const bookList = books.length > 0 ? books.map(item =>
        <div key={item.id}>
            <li className="list-group-item mb-2 gap-3 d-flex justify-content-between align-items-center">
                <div>{item.title}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
                <div className="btn-group gap-2">
                    <button className="btn btn-primary" >Read</button>
                    <button className="btn btn-danger" disabled={!isLogedIn} onClick={() => dispatch(deleteBook(item.id))} >Delete</button>
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
