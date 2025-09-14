// Dark mode
const toggle = document.getElementById("darkToggle");
const body = document.body;
const circleIcon = toggle.querySelector(".toggle-circle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    circleIcon.innerHTML = `<i class="fas fa-moon"></i>`;
    toggle.classList.add("dark-btn");
  } else {
    circleIcon.innerHTML = `<i class="fas fa-sun"></i>`;
    toggle.classList.remove("dark-btn");
  }
});

// Menu
const menu = document.querySelector('.buttomsmallscreen');
const iconMenu = document.querySelector('.iconmenu');
const closeBtn = document.querySelector('.close-btn');

iconMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Search
const btnSearch = document.querySelector('.btnsearch');
const searchBox = document.querySelector('.search-box');
const closeSearch = document.querySelector('.close-search');

btnSearch.addEventListener('click', () => {
  searchBox.style.display = 'flex';
});

closeSearch.addEventListener('click', () => {
  searchBox.style.display = 'none';
});
