import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="mb-3 sticky-top fs-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link p-3" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link p-3" to="posts">
                                Posts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link p-3" to="users">
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
