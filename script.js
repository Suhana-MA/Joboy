const countryBtn = document.querySelector('.country-btn');
const dropdownList = document.querySelector('.dropdown-list');

countryBtn.addEventListener('click', function(e) {
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    e.stopPropagation();
});

// Hide dropdown when clicking outside
document.addEventListener('click', function() {
    dropdownList.style.display = 'none';
});

// Optional: handle country selection
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        countryBtn.textContent = this.textContent;
        dropdownList.style.display = 'none';
    });
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});