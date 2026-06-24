document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    tabsHandle();
    displayModal();
    const roleFilter = document.getElementById('filter-role');
    if (roleFilter) {
        roleFilter.addEventListener('change', filterUsers);
    }
    const searchInput = document.getElementById('search-users');
    executeSearch(searchInput, filterUsers);

    const categoryRecentProductFilter = document.getElementById('filter-select-recent-products');
    if (categoryRecentProductFilter) {
        categoryRecentProductFilter.addEventListener('change', filterRecentProducts);
    }

    const categoryAllProductFilter = document.getElementById('filter-all-products');
    if (categoryAllProductFilter) {
        categoryAllProductFilter.addEventListener('change', filterAllProducts);
    }
    const searchProduct = document.getElementById('search-product');
    executeSearch(searchProduct, filterAllProducts);

    const filterStatus = document.getElementById('filter-status');
    if (filterStatus) {
        filterStatus.addEventListener('change', filterByStatus);
    }

    const filterOrder = document.getElementById('filter-select-order');
    if (filterOrder) {
        filterOrder.addEventListener('change', filterOrderProduct);
    }
    const searchCustomer = document.getElementById('search-customer-order');
    executeSearch(searchCustomer, filterOrderProduct);
});

let allData = {
    users: [],
    products: [],
    orders: [],
    recentProducts: []
}

function displayProducts() {
    async function fetchPanelData() {
        try {
            let response = await fetch("./json/panel.json");
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            let data = await response.json();

            allData = {
                users: data.users,
                products: data.products,
                order: data.order,
                recentProducts: data.recentProducts
            }
            renderAllData(allData);

        } catch (error) {
            console.log(error);
        }
    }
    fetchPanelData();
}

function renderAllData(data) {
    renderRecentProducts(data.recentProducts);
    renderUsers(data.users);
    renderProducts(data.products);
    renderOrder(data.order);
}

function renderRecentProducts(recentProducts) {
    const containerItemRecentProducts = document.querySelector('.container-item-recent-products');
    containerItemRecentProducts.innerHTML = '';
    recentProducts.map((item) => {
        const itemProduct = `<tr data-role="${item.category}">
                        <td class="col-name">${item.name}</td>
                        <td class="col-role">${item.category}</td>
                        <td class="col-state">${item.price}</td>
                        <td class="col-state">${item.amount}</td>
                        <td class="col-actions">
                            <button class="edit-btn"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td><button class="del-btn"><i class="bi bi-x-circle"></i></button></td>
                    </tr>`;
        return containerItemRecentProducts.innerHTML += itemProduct;
    });
}

function renderUsers(users) {
    const containerItemUsers = document.querySelector('.container-item-users');
    containerItemUsers.innerHTML = '';

    users.map((item) => {
        const itemUsers =
            `<tr data-role="${item.roll}">
                        <td class="col-id">${item.id}</td>
                        <td class="col-name">${item.name}</td>
                        <td class="col-role">${item.roll}</td>
                        <td class="col-state">${item.state}</td>
                        <td class="col-actions">
                            <button class="edit-btn"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td><button class="del-btn"><i class="bi bi-x-circle"></i></button></td>
                    </tr>`;
        containerItemUsers.innerHTML += itemUsers;
    });
}

function renderProducts(products) {
    const containerItemProducts = document.querySelector('.container-item-products');
    containerItemProducts.innerHTML = '';

    products.map((item) => {
        const itemProduct = `  
                            <tr data-role="${item.category}">
                        <td class="col-id">${item.id}</td>
                        <td class="col-name">${item.name}</td>
                        <td class="col-category">${item.category}</td>
                        <td class="col-price">${item.price}</td>
                        <td class="col-state">${item.amount}</td>
                        <td class="col-actions">
                            <button class="edit-btn"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td><button class="del-btn"><i class="bi bi-x-circle"></i></button></td>
                    </tr>`;
        containerItemProducts.innerHTML += itemProduct;
    });
}

function renderOrder(order) {
    const containerItemOrder = document.querySelector('.container-item-orders');
    containerItemOrder.innerHTML = '';

    order.map((order) => {
        const itemOrder = `
                            <tr data-role="${order.state}">
                        <td class="col-id">${order.id}</td>
                        <td class="col-name">${order.orderId}</td>
                        <td class="col-category">${order.customer}</td>
                        <td class="col-price">${order.Date}</td>
                        <td class="col-state">${order.quantity}</td>
                        <td class="col-state">${order.state}</td>
                        <td class="col-state">${order.pay}</td>
                        <td class="col-actions">
                            <button class="edit-btn"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td><button class="del-btn"><i class="bi bi-x-circle"></i></button></td>
                    </tr>`;
        containerItemOrder.innerHTML += itemOrder;
    });
}

function filterUsers() {
    const roleFilter = document.getElementById('filter-role');
    const searchInput = document.getElementById('search-users');

    const selectedRole = roleFilter ? roleFilter.value : "all";
    const searchTerm = searchInput ? searchInput.value : '';

    let filtered = allData.users;
    if (selectedRole !== 'all') {
        filtered = filtered.filter(user => user.roll == selectedRole);
    }

    if (searchTerm) {
        filtered = filtered.filter(user => user.name.includes(searchTerm));
    }

    renderUsers(filtered);
}

function filterByStatus() {
    const filterStatus = document.getElementById('filter-status');
    const selectStatus = filterStatus ? filterStatus.value : "all";
    let filtered = allData.users;
    if (selectStatus !== 'all') {
        filtered = filtered.filter(user => user.state === selectStatus);
    }
    renderUsers(filtered);
}

function filterRecentProducts() {
    const filterByCategory = document.getElementById('filter-select-recent-products');
    const selecedCategory = filterByCategory ? filterByCategory.value : "all";
    let filtered = allData.recentProducts;
    if (selecedCategory !== "all") {
        filtered = filtered.filter(product => product.category == selecedCategory);
    }
    renderRecentProducts(filtered);
}

function filterAllProducts() {
    const filterAllByCategory = document.getElementById('filter-all-products');
    const searchProduct = document.getElementById('search-product');

    const selectedCategory = filterAllByCategory ? filterAllByCategory.value : "all";
    const searchTerm = searchProduct ? searchProduct.value : '';

    let filtered = allData.products;
    if (selectedCategory !== "all") {
        filtered = filtered.filter(all => all.category === selectedCategory);
    }

    if (searchTerm) {
        filtered = filtered.filter(product => product.name.includes(searchTerm));
    }

    renderProducts(filtered);
}

function filterOrderProduct() {
    const filterOrder = document.getElementById('filter-select-order');
    const searchCustomer = document.getElementById('search-customer-order');

    const selectOrder = filterOrder ? filterOrder.value : "all";
    const searchTerm = searchCustomer ? searchCustomer.value : '';

    let filtered = allData.order;
    if (selectOrder !== 'all') {
        filtered = filtered.filter(order => order.state === selectOrder);
    }

    if (searchTerm) {
        filtered = filtered.filter(order => order.customer.includes(searchTerm));
    }
    renderOrder(filtered);
}


function executeSearch(elementId, filterFunc) {
    if (elementId) {
        let timeout;
        elementId.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(filterFunc, 300);
        });
    }
}

function tabsHandle() {
    const tabbtns = document.querySelectorAll('.btn-items-page');
    const mainPage = document.querySelectorAll('.main-page');
    tabbtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log(e.target);
            const id = e.target.dataset.id;
            console.log(id);
            const element = document.getElementById(id);

            mainPage.forEach((page) => {
                page.classList.remove('active-main-page');
            });
            element.classList.add('active-main-page');

            tabbtns.forEach((tab) => {
                tab.classList.remove('active-btn-items-page');
            });
            e.target.parentElement.classList.add('active-btn-items-page');
        });
    });
}

function displayModal() {
    const addNewModal = document.querySelectorAll('.add-new-modal');
    const modal = document.querySelectorAll('.modal');
    const cancel = document.querySelectorAll('.cancel');

    addNewModal.forEach((add, idx) => {
        add.addEventListener('click', () => {
            modal[idx].classList.add('active-modal');

            cancel.forEach((c) => {
                c.addEventListener('click', () => {
                    modal[idx].classList.remove('active-modal');
                });
            });
        });
    });
}