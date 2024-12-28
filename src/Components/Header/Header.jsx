import { useSelector } from "react-redux";


function Header() {
    const { error } = useSelector(state => state.books)
    console.log(error)
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
                                <a className="nav-link" href="#home">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Header;
