function setObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key) {
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

let books = [];

function addBook(title, author, year, pages) {
    const id = Date.now();
    const newBook = { id, title, author, year, pages };
    books.push(newBook);
}

// Получаем элементы формы
const bookForm = document.querySelector("#bookForm");
const titleInput = document.querySelector("#bookTitle");
const authorInput = document.querySelector("#bookAuthor");
const yearInput = document.querySelector("#bookYear");
const pagesInput = document.querySelector("#bookPages");

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookTitle = titleInput.value;
    const bookAuthor = authorInput.value;
    const bookYear = +yearInput.value;
    const bookPages = +pagesInput.value;
    addBook(bookTitle, bookAuthor, bookYear, bookPages);
    setObject("books", books);
    renderBooks();
    bookForm.reset();
});

// Отображение книг на странице
const bookList = document.querySelector("#bookList");

function renderBooks(booksArray = books) {
    bookList.innerHTML = "";
    booksArray.forEach((book) => {
        const item = document.createElement("li");
        item.innerHTML = `${book.title} by ${book.author}, ${book.year} - ${book.pages} pages 
                          <button onclick="deleteBook(${book.id})">Удалить</button>`;
        bookList.append(item);
    });
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    setObject("books", books);
    renderBooks();
}

// Загрузка книг из localStorage при загрузке страницы
const savedBooks = getObject("books");
if (savedBooks) {
    books = savedBooks;
    renderBooks();
}

// Фильтрация книг по названию
const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchValue)
    );
    renderBooks(filteredBooks);
});

// Сортировка книг
const sortSelect = document.querySelector("#sortSelect");
sortSelect.addEventListener("change", () => {
    switch (sortSelect.value) {
        case "titleAsc":
            books.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "titleDesc":
            books.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "yearAsc":
            books.sort((a, b) => a.year - b.year);
            break;
        case "yearDesc":
            books.sort((a, b) => b.year - a.year);
            break;
    }
    renderBooks();
});
