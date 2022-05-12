import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Post() {
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const params = useParams();

    function getPost() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((post) => post.json())
            .then((post) => {
                setPost(post);
                return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            })
            .then((user) => user.json())
            .then((user) => setUser(user));
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <>
            {post && user && (
                <>
                    <h1 className="text-center mb-5">{post.title}</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <i className="bi bi-book" style={{ fontSize: "200px" }} />
                            </div>
                            <div className="col-9" style={{ fontSize: "24px" }}>
                                <p>{post.body}</p>
                                <Link to={`/users/${user.id}`}>&copy; {user.username}</Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
