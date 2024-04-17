// src: https://stackoverflow.com/questions/54511902/how-to-use-classlist-toggle-to-show-hide-drop-down-list-content
window.onload = () => {
  document.getElementById("dropdown-button").onclick = () => toggleMenu();

  function toggleMenu() {
    document.getElementById("dropdown-menu").classList.toggle("show");
    document.getElementById("dropdown-icon-down").classList.toggle("hide");
    document.getElementById("dropdown-icon-up").classList.toggle("show");
  }
}
