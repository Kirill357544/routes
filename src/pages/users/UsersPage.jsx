import Users from "../../components/users/Users";
import { Outlet, useParams } from "react-router-dom";

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
