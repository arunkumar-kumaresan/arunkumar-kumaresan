const hamburger = document.getElementById("hamburger");
const backdrop = document.getElementById("backdrop");
if (hamburger) {
    hamburger.addEventListener("click", openMenu);
}
if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
}
function openMenu() {
    let sidebar = document.getElementById("sidebar");
    backdrop.classList.add("open");
    sidebar.classList.add("open");
}
function closeMenu() {
    let sidebar = document.getElementById("sidebar");
    backdrop.classList.remove("open");
    sidebar.classList.remove("open");
}
var mobileNavItems = document.getElementsByClassName("sidebar__nav__item");
for(let i = 0; i < mobileNavItems.length; i++) {
    mobileNavItems[i].addEventListener('click', closeMenu);
}