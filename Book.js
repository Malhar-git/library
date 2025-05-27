document.addEventListener("DOMContentLoaded", function() {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    const tbody = document.querySelector('#bookTable tbody');

    function renderTable(){
        tbody.innerHTML = '';
        library.forEach((book, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><input type ="checkbox" ${book.read ? 'checked ' : ''}disabled</td>
                <td><button data-index="${index}">Remove</button></td>
            `;
            tbody.appendChild(row);
        });    
    }
    tbody.addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON'){
            const idx = e.target.getAttribute('data-index');
            library.splice(idx, 1);
            localStorage.setItem('library', JSON.stringify(library));
            renderTable();
        }
    });
    renderTable();
});