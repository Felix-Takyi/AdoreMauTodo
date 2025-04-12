let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

function saveToLocal() {
  localStorage.setItem('shoppingList', JSON.stringify(items));
}

function renderList() {
  const list = document.getElementById('itemList');
  list.innerHTML = '';
  items.forEach((item, index) => {
    list.innerHTML += `
      <li>
        <input type="text" value="${item}" onchange="editItem(${index}, this.value)" />
        <div class="actions">
          <button onclick="deleteItem(${index})">Delete</button>
        </div>
      </li>`;
  });
}

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value) {
    items.push(value);
    saveToLocal();
    renderList();
    input.value = '';
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  saveToLocal();
  renderList();
}

function editItem(index, newValue) {
  items[index] = newValue;
  saveToLocal();
}

renderList();