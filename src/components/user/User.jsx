import { Link, useParams } from "react-router-dom";
import { useUser } from "../../hooks/use-user";

export default function User() {
    const params = useParams();
    const { user, posts } = useUser(params.id);

    return (
        <>
            {user && posts && (
                <>
                    <h1 className="text-center mb-5">{user.username}</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <i className="bi bi-person-square" style={{ fontSize: "200px" }} />
                            </div>
                            <div className="col-9">
                                <dl>
                                    <dt>Name:</dt>
                                    <dd>{user.name}</dd>
                                </dl>
                                <dl>
                                    <dt>Email:</dt>
                                    <dd>{user.email}</dd>
                                </dl>
                                <dl>
                                    <dt>Phone:</dt>
                                    <dd>{user.phone}</dd>
                                </dl>
                                <dl>
                                    <dt>Website:</dt>
                                    <dd>{user.website}</dd>
                                </dl>
                                <dl>
                                    <dt>Company:</dt>
                                    <dd>{user.company.name}</dd>
                                </dl>
                                <dl>
                                    <dt>City:</dt>
                                    <dd>{user.address.city}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="row">
                            <h2>Posts</h2>
                            <ul style={{ fontSize: "18px" }}>
                                {posts.map((post) => (
                                    <li key={post.id}>
                                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
