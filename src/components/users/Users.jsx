import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState(null);
    const navigate = useNavigate();

    function getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((users) => users.json())
            .then((users) => setUsers(users));
    }

    useEffect(() => {
        getUsers();
    }, []);

    function handleClick(id) {
        navigate(`/users/${id}`);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {users !== null &&
                    users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleClick(user.id)}
                                        className="btn btn-outline-dark"
                                    >
                                        <i className="bi bi-list" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}
