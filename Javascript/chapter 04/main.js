function getClassEle(name) {
  return document.getElementsByClassName(name);
}

const title = getClassEle("title");

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function () {
    const des = title[i].nextElementSibling;
    if (des.className === "des show") {
      des.className = "des";
    } else {
      des.className = "des show";
    }
  });
}

const btnOpen = document.getElementById("openIcon");
const menuContainer = document.getElementById("menuContainer");

btnOpen.addEventListener("click", function () {
  if (menuContainer.className === "menuContainer showMenu") {
    menuContainer.className = "menuContainer";
  } else {
    menuContainer.className = "menuContainer showMenu";
  }
});

const btnClose = document.getElementById("closeIcon");

btnClose.addEventListener("click", function () {
  menuContainer.className = "menuContainer";
});
