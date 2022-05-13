import { useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/use-posts";
import Spinner from "../spinner/Spinner";

export default function Posts() {
    const navigate = useNavigate();
    const { posts, loading } = usePosts();

    function handleClick(id) {
        navigate(`/posts/${id}`);
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
                            <th scope="col">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => handleClick(post.id)}
                                    >
                                        <i className="bi bi-book" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
