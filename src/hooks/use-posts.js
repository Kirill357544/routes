import { useState, useEffect } from "react";

import { getPosts } from "../api/post-api";

export function usePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts);
            setLoading(false);
        });
    }, []);

    return { posts, loading };
}
