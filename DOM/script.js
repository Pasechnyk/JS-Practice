window.addEventListener('load', function() {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-button');

    // Submit product into the list
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Get values
        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value).toFixed(2);
        const productCategory = document.getElementById('productCategory').value;
    
        if (productName && productPrice && productCategory)
        {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${productPrice}</td>
                <td>${productCategory}</td>`;
    
            productList.appendChild(newRow);
    
            productForm.reset();
        }
        else { alert('Fill in all information!'); }
    });

    // Dynamic search
    searchInput.addEventListener('input', function(){
        const searchTerm = searchInput.value.toLowerCase();
        const rows = productList.getElementsByTagName('tr');

        for (const row of rows) {
            const productName = row.getElementsByTagName('td')[0];
            if (productName) {
                const nameText = productName.textContent.toLowerCase();
                if (nameText.includes(searchTerm) || searchTerm === '') {
                    row.style.display = '';
                } 
                else { row.style.display = 'none'; }
            }
        }
    });

    // Clear list from products
    console.log(clearButton);
    clearButton.addEventListener('click', function() {
        productList.innerHTML = '';
    });
});
