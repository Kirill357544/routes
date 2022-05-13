import { useState, useEffect } from "react";
import { getUser } from "../api/user-api";

export function useUser(userId) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(userId).then((user) => setUser(user));
    }, [userId]);

    return { user };
}
