const cselect = document.querySelector("#cottages-select");
const cottageTabs = document.querySelectorAll(".cottages-nav__list-item");
const cottages = document.querySelectorAll(".cottage");

function changeCottage(cottage) {
  switch (cottage) {
    case "cottage1":
      cottage = ".cottage--1";
      break;
    case "cottage2":
      cottage = ".cottage--2";
      break;
    case "cottage3":
      cottage = ".cottage--3";
      break;
    case "cottage4":
      cottage = ".cottage--4";
      break;
  }

  cottages.forEach((item) => {
    item.style.display = "none";
  });
  document.querySelector(cottage).style.display = "initial";
}

cselect.addEventListener("change", () => {
  changeCottage(cselect.options[cselect.selectedIndex].value);
});

cottageTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    changeCottage(tab.dataset.cottage);
    cottageTabs.forEach(item => item.classList.remove('cottages-nav__list-item--active'));
    tab.classList.add('cottages-nav__list-item--active');
  });
});
