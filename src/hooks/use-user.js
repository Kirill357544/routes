import { useState, useEffect } from "react";
import { getUser } from "../api/user-api";

export function useUser(userId) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser(userId).then((user) => {
            setUser(user);
            setLoading(false);
        });
    }, [userId]);

    return { user, loading };
}
