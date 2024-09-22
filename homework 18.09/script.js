// Асинхронная функция для получения данных пользователей
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error("Ошибка загрузки пользователей:", error);
    }
}

// Функция отображения списка пользователей на странице
function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <button onclick="fetchUserPosts(${user.id})">Show Posts</button>
        `;
        userList.appendChild(li);
    });
}

// Асинхронная функция для получения постов пользователя
async function fetchUserPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Ошибка загрузки постов:", error);
    }
}

// Функция отображения постов на странице
function displayPosts(posts) {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `;
        postList.appendChild(li);
    });
}

window.onload = function() {
    fetchUsers();
};