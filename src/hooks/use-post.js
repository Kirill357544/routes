import { useState, useEffect } from "react";

import { getPost } from "../api/post-api";
import { getUser } from "../api/user-api";

export function usePost(postId) {
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPost(postId)
            .then((post) => {
                setPost(post);
                return getUser(post.userId);
            })
            .then((user) => {
                setUser(user);
                setLoading(false);
            });
    }, [postId]);

    return { post, user, loading };
}
