const overlay = document.querySelector(".overlay");
const menu = document.querySelector("#menu");
const button = document.querySelector(".button");
const links = document.querySelectorAll(".links a");
const menuIcon = button.querySelector("span");

button.addEventListener("click", function () {
  this.querySelector("span").classList.toggle("is-closed");
  //handleClick;
});

const handleClick = () => {
  menu.classList.toggle("active"); // Toggle 'active' class
  setTimeout(() => {
      document.body.classList.toggle("menu-active");
  }, 100);
  //menuIcon.classList.toggle("is-closed");
};

menu.addEventListener("click", () => {
  document.body.classList.remove("menu-active");
  menu.classList.remove("active");

  setTimeout(() => {
    menu.classList = [];
  }, 400);
});

overlay.addEventListener("click", () => {
  document.body.classList.remove("menu-active");
  menu.classList.remove("active");
  closeMenu()
});

links.forEach(link => {
  link.addEventListener("click", () => {
      document.body.classList.remove("menu-active");
      menu.classList.remove("active");
      closeMenu()
  });
});

const closeMenu = () => {
  document.body.classList.remove("menu-active");
  menu.classList.remove("active");
  menuIcon.classList.remove("is-closed"); // Reset menu icon to ☰
};
