import { useState, useEffect } from "react";

import { getUserPosts } from "../api/user-api";

export function useUserPosts(userId) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserPosts(userId).then((posts) => {
            setPosts(posts);
            setLoading(false);
        });
    }, [userId]);

    return { posts, loading };
}
