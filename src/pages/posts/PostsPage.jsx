import { useParams, Outlet } from "react-router-dom";

import Posts from "../../components/posts/Posts";

export default function PostsPage() {
    const params = useParams();

    return (
        <>
            {params.id ? (
                <Outlet />
            ) : (
                <>
                    <h1 className="text-center mb-3">Posts</h1>
                    <Posts />
                </>
            )}
        </>
    );
}
