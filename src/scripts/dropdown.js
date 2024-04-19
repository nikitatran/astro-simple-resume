// src: https://stackoverflow.com/questions/54511902/how-to-use-classlist-toggle-to-show-hide-drop-down-list-content

const dropdownMenu = document.getElementById("dropdown-menu");

document.getElementById("dropdown-button").onclick = () => toggleMenu();

function toggleMenu() {
  dropdownMenu.classList.toggle('opacity-0');
  dropdownMenu.classList.toggle('invisible');
  dropdownMenu.classList.toggle('translate-y-2');
  document.getElementById("dropdown-icon-down").classList.toggle("hide");
  document.getElementById("dropdown-icon-up").classList.toggle("show");
}

