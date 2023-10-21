
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');
const addButton = document.getElementById('add-button');

// Solve script loading before DOM
const el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}

// Form event
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

// Search event
searchInput.addEventListener('input', function()
{
    const searchTerm = searchInput.value.toLowerCase();

    const rows = productList.getElementsByTagName('tr');
    for (const row of rows) {
        const productName = row.getElementsByTagName('td')[0];
        if (productName) {
            const nameText = productName.textContent.toLowerCase();
            if (nameText.includes(searchTerm) || searchTerm === '') {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }
});

// Clear list event
clearButton.addEventListener('click', function() {
    productList.innerHTML = '';
});


