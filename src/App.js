import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Fail from "./pages/fail/FailPage";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import UsersPage from "./pages/users/UsersPage";
import UserPage from "./pages/user/UserPage";
import PostPage from "./pages/post/PostPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="posts" element={<PostsPage />}>
                    <Route path=":id" element={<PostPage />} />
                </Route>
                <Route path="users" element={<UsersPage />}>
                    <Route path=":id" element={<UserPage />} />
                </Route>
                <Route path="*" element={<Fail />} />
            </Route>
        </Routes>
    );
}
