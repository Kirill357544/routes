import { useState, useEffect } from "react";
import { getPosts } from "../api/post-api";

export function usePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    return { posts };
}
