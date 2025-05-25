document.getElementById('book-form').addEventListener('submit',function(event){
    event.preventDefault();

    const title = document.getElementById('book-name').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById("book-pages").value;

    const newBook = {
        title,
        author,
        pages
    };

    const library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(newBook);
    localStorage.setItem('library', JSON.stringify(library));
    window.location.href = 'page.html';
});