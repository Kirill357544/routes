import { Outlet, useParams } from "react-router-dom";

import Users from "../../components/users/Users";

export default function UsersPage() {
    const params = useParams();

    return (
        <>
            {params.id ? (
                <Outlet />
            ) : (
                <>
                    <h1 className="text-center mb-3">Users</h1>
                    <Users />
                </>
            )}
        </>
    );
}
