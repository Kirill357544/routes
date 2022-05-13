import { useState, useEffect } from "react";
import { getPost, getPostUser } from "../api/post-api";

export function usePost(postId) {
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPost(postId)
            .then((post) => {
                setPost(post);
                return getPostUser(post.userId);
            })
            .then((user) => {
                setUser(user);
                setLoading(false);
            });
    }, [postId]);

    return { post, user, loading };
}
