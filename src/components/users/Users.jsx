import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use-users";
import Spinner from "../spinner/Spinner";

export default function Users() {
    const navigate = useNavigate();
    const { users, loading } = useUsers();

    function handleClick(id) {
        navigate(`/users/${id}`);
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
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
            )}
        </>
    );
}
