export function getPosts() {
    return fetch(`${window.BASE_URL}/posts`).then((response) => response.json());
}

export function getPost(postId) {
    return fetch(`${window.BASE_URL}/posts/${postId}`).then((response) => response.json());
}

export function getPostUser(userId) {
    return fetch(`${window.BASE_URL}/users/${userId}`).then((response) => response.json());
}
