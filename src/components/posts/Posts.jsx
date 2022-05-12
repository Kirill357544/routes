import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    function getPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((posts) => posts.json())
            .then((posts) => setPosts(posts));
    }

    useEffect(() => {
        getPosts();
    }, []);

    function handleClick(id) {
        navigate(`/posts/${id}`);
    }

    return (
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
                            <button className="btn btn-outline-dark" onClick={() => handleClick(post.id)}>
                                <i className="bi bi-book" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
