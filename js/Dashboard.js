// Sample product data
const products = [
    { name: 'TV', price: 887, count: 123 },
    { name: 'Laptop', price: 1267, count: 23 },
    { name: 'Phone', price: 267, count: 21 },
    { name: 'Wash Machine', price: 236, count: 4 },
    { name: 'Keyboard', price: 12, count: 3556 }
  ];
  

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
  