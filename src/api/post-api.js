export function getPost(postId) {
    return fetch(`${window.BASE_URL}/posts/${postId}`).then((response) => response.json());
}

export function getUserPosts(userId) {
    return fetch(`${window.BASE_URL}/posts?userId=${userId}`).then((response) => response.json());
}

export function getPosts() {
    return fetch(`${window.BASE_URL}/posts`).then((response) => response.json());
}
