function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}
function saveLibrary() {
    localStorage.setItem('library', JSON.stringify(library));
}
function loadLibrary() {
    const stored = localStorage.getItem('library');
    if (stored) {
        const parsed = JSON.parse(stored);
        library = parsed.map(book => new Book(book.title, book.author, book.pages, book.hasRead));
    }else {
        library = [];
    }
}
function displayBooks(){
    const tbody = document.querySelector("#bookTable tbody");
    tbody.innerHTML = "";
    library.forEach((book, index) => {
        const row = document.createElement("tr");
        index = crypto.randomUUID;
        row.innerHTML = `
            <td>${index}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.hasRead ? "Yes" : "No"}</td>
            <td><button class = "remove-btn" onclick="removeBook(${index})">Remove</button></td>
        `;
        tbody.appendChild(row);
    });
}
function removeBook(index) {
    library.splice(index, 1);
    saveLibrary();
    displayBooks();
}
let library = [];
loadLibrary();
displayBooks();
