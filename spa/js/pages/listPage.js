import { appState, setState } from '../state.js';

export function renderListPage() {
    document.getElementById('app').innerHTML = `
    <h1>Items List</h1>
    <sl-input id="filterInput" placeholder="Filter items..."></sl-input>
    <sl-table id="itemsTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody id="itemsBody"></tbody>
    </sl-table>
  `;

    // Fetch and display items
    fetchItems();
}

// Fetch items (in real life, this would be an API call)
function fetchItems() {
    const items = [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
        { name: 'Item 3', price: 30 },
    ];

    setState({ items });
    renderItems(appState.items);
}

// Render items in the table
function renderItems(items) {
    const tableBody = document.getElementById('itemsBody');
    tableBody.innerHTML = '';

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${item.price}</td>`;
        tableBody.appendChild(row);
    });
}
