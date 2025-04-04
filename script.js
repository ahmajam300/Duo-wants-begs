// BEGS Counter Function
function increaseBegs() {
    let count = document.getElementById('begs-count');
    count.innerText = parseInt(count.innerText) + 1;
}

// Toggle Upgrades Section
document.getElementById('upgradeTab').addEventListener('click', function() {
    let upgrades = document.getElementById('upgrades');
    upgrades.style.display = (upgrades.style.display === 'block') ? 'none' : 'block';
});

// Simulate Upgrade Purchase
function buyUpgrade() {
    alert("Upgrade purchased!");
}
