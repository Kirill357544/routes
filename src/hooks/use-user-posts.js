import { useState, useEffect } from "react";
import { getUserPosts } from "../api/user-api";

export function useUserPosts(userId) {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getUserPosts(userId).then((posts) => setPosts(posts));
    }, [userId]);

    return { posts };
}
