function custom_fetch(url, callback) {
    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error("Ошибка при выполнении запроса:", error);
        });
}

async function getUserList(ids) {
    const userList = document.getElementById('userList');
    userList.innerHTML = "";

    for (let id of ids) {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        
        custom_fetch(url, (user) => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
}

getUserList([1, 2, 3]);