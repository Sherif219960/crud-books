import { useSelector } from "react-redux"

export const BookInfo = ({ info }) => {
    const { title, description, price, userName } = info
    return (
        <>
            <h2>Book Details</h2>
            {Object.keys(info).length > 1 ? <div>
                <p className="fw-bolder">Title: {title}</p>
                <p className="fw-bolder">Description: {description}</p>
                <p className="fw-bolder">Inserted By: {userName}</p>
                <p className="fw-bolder">Price: {price}</p>
            </div> : <div className="alert alert-secondary" role='alert'>
                three is no post selected yet. please select!
            </div>}


        </>
    )
}
