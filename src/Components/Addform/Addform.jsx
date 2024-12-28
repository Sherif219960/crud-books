import { useDispatch } from "react-redux"
import { insertBooks } from "../../store/bookSlice"
import { useRef } from "react"


export const Addform = () => {
    // ref
    const title = useRef(null)
    const price = useRef(null)
    const description = useRef(null)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { title: title.current.value, price: price.current.value, description: description.current.value }
        dispatch(insertBooks(data))
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">insert book</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        ref={title}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        ref={price}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        ref={description}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
