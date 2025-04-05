// Display form data
const params = new URLSearchParams(window.location.search);
const summary = document.getElementById('reviewSummary');

params.forEach((value, key) => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${key}:</strong> ${value}`;
    summary.appendChild(div);
});

// Review counter
let count = localStorage.getItem('reviewCount') || 0;
count = parseInt(count) + 1;
localStorage.setItem('reviewCount', count);
document.getElementById('reviewCount').textContent = count;