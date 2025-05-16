

  function populateProductsTable() {
    const tableBody = document.querySelector('#productsTable tbody');
    
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td><span class="price">$${product.price}</span></td>
        <td><span class="count">${product.count}</span></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
 
  document.addEventListener('DOMContentLoaded', () => {
    populateProductsTable();
  });
  