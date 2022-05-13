export function getUser(userId) {
    return fetch(`${window.BASE_URL}/users/${userId}`).then((response) => response.json());
}

export function getAllUsers() {
    return fetch(`${window.BASE_URL}/users`).then((response) => response.json());
}
