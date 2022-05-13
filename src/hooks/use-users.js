import { useEffect, useState } from "react";
import { getAllUsers } from "../api/user-api";

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
            setLoading(false);
        });
    }, []);

    return { users, loading };
}
