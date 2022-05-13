import { useState, useEffect } from "react";
import { getUser, getUserPosts } from "../api/user-api";

export function useUser(userId) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getUser(userId)
            .then((user) => {
                setUser(user);
                return getUserPosts(user.id);
            })
            .then((userPosts) => setPosts(userPosts));
    }, [userId]);

    return { user, posts };
}
