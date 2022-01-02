
function dropdownHandler(element) {
  var single = element.getElementsByTagName("ul")[0];
  single.classList.toggle("hidden");
}

function MenuHandler(el, val) {
  var MainList = el.parentElement.getElementsByTagName("ul")[0];
  var closeIcon = el.parentElement.getElementsByClassName("close-m-menu")[0];
  var showIcon = el.parentElement.getElementsByClassName("show-m-menu")[0];

  if (val) {
    MainList.classList.remove("hidden");
    el.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    showIcon.classList.remove("hidden");
    MainList.classList.add("hidden");
    el.classList.add("hidden");
  }
}

var sideBar = document.getElementById("mobile-nav");
var menu = document.getElementById("menu");
var cross = document.getElementById("cross");
sideBar.style.transform = "translateX(-100%)";

var sidebarHandler = function sidebarHandler(check) {
  if (check) {
    sideBar.style.transform = "translateX(0px)";
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    sideBar.style.transform = "translateX(-100%)";
    menu.classList.remove("hidden");
    cross.classList.add("hidden");
  }
};

var list = document.getElementById("list");
var chevrondown = document.getElementById("chevrondown");
var chevronup = document.getElementById("chevronup");

var listHandler = function listHandler(check) {
  if (check) {
    list.classList.remove("hidden");
    chevrondown.classList.remove("hidden");
    chevronup.classList.add("hidden");
  } else {
    list.classList.add("hidden");
    chevrondown.classList.add("hidden");
    chevronup.classList.remove("hidden");
  }
};

var list2 = document.getElementById("list2");
var chevrondown2 = document.getElementById("chevrondown2");
var chevronup2 = document.getElementById("chevronup2");

var listHandler2 = function listHandler2(check) {
  if (check) {
    list2.classList.remove("hidden");
    chevrondown2.classList.remove("hidden");
    chevronup2.classList.add("hidden");
  } else {
    list2.classList.add("hidden");
    chevrondown2.classList.add("hidden");
    chevronup2.classList.remove("hidden");
  }
}; // window.dropdownHandler = dropdownHandler;
// window.MenuHandler = MenuHandler;


window.sidebarHandler = sidebarHandler; // window.listHandler = listHandler;
// window.listHandler2 = listHandler2;

