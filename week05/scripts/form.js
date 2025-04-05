document.addEventListener('DOMContentLoaded', () => {
    // Populate product dropdown
    const products = [
        { id: "fc-1888", name: "flux capacitor" },
        // ... other products
    ];

    const select = document.querySelector('#product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});