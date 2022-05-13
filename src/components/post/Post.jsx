import { Link, useParams } from "react-router-dom";
import { usePost } from "../../hooks/use-post";
import Spinner from "../spinner/Spinner";

export default function Post() {
    const params = useParams();
    const { post, user, loading } = usePost(params.id);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
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
