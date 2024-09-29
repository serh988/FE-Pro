// 1. Функция custom_fetch
function custom_fetch(url, callback) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Ошибка: ${response.status}`);
            }
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Ошибка выполнения запроса:', error);
        });
}

// 2. Функция getUserList
async function getUserList(userIds) {
        for (let id of userIds) {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        
        
        custom_fetch(url, user => {
            const userList = document.getElementById('userList');
            const listItem = document.createElement('li');
            listItem.innerText = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
    }
}

getUserList([1, 2, 3]);
