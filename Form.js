document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    try {
        const index = document.getElementById("book-id").value.trim();
        const title = document.getElementById('book-name').value.trim();
        const author = document.getElementById('book-author').value.trim();
        const pages = document.getElementById("book-pages").value.trim();
        const read = document.getElementById("book-read").checked;

        if (!index || !title || !author || !pages) {
            alert("All fields except 'Have you read?' must be filled out.");
            return;
        }
        if (isNaN(Number(pages)) || Number(pages) <= 0) {
            alert("Number of pages must be a positive number.");
            return;
        }

        const newBook = {
            index,
            title,
            author,
            pages,
            read
        };

        const library = JSON.parse(localStorage.getItem('library')) || [];
        library.push(newBook);
        localStorage.setItem('library', JSON.stringify(library));
        window.location.href = 'page.html';

    } catch (error) {
        alert("An unexpected error occurred: " + error.message);
        console.error(error);
    }
});