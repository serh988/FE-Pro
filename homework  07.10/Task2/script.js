class Book {
    static allBooks = [];

    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

        Book.allBooks.push(this);
    }

    static listAuthors() {
        return Book.allBooks.map(book => book.author);
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1985);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
const book3 = new Book("1984", "George Orwell", 1949);

const authors = Book.listAuthors();
console.log("Список авторов:", authors);
