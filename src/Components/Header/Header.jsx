import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../../store/authSlice";


function Header() {
    const { error } = useSelector(state => state.books)
    const { isLogedIn } = useSelector(state => state.author)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logInOut())
    }

    return (
        <>
            {error && <div className="alert alert-danger mb-0" role="alert">
                <h2 className="text-lead text-capitalize">Failed to fetch data</h2>
            </div>}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className={`nav-link fs-5 text-capitalize ${!isLogedIn ? 'text-primary' : 'text-danger'}`} href="#home" onClick={handleClick}>{!isLogedIn ? 'login' : 'logout'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>

    );
}

export default Header;
