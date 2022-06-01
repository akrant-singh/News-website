import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/style.css"
export default function Navbar(props) {
    function changeSearch(e) {
        props.changeSearch(e.target.value)
    }
    {
        return (
            <>
                <nav className="navbar navbar-expand-lg background fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">NewsWeb</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light active" aria-current="page" to="/">All</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Politics">Politics</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Crime">Crime</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Science">Science</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Education">Education</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/IPL">IPL</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Covid19">Covid19</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Jokes">Jokes</Link></li>
                                        <li><Link className="dropdown-item" onClick={() => {
                                            props.changeSearch("None")
                                            document.getElementById("search").value = ""
                                        }
                                        } to="/Entertainment">Entertainment</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex w-100" role="search">
                                <input className="form-control me-2" type="text" id='search' name='search' onChange={(e) => changeSearch(e)} placeholder="Search News" />
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button></li>
                                        <li><button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br />
                <br />
            </>
        )
    }
}
