function getClassEle(name) {
  return document.getElementsByClassName(name);
}

function $(id) {
  return document.getElementById(id);
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
const btnClose = document.getElementById("closeIcon");

function toggleMenu() {
  const menuContainer = document.getElementById("menuContainer");
  if (menuContainer.className === "menuContainer showMenu") {
    menuContainer.className = "menuContainer";
  } else {
    menuContainer.className = "menuContainer showMenu";
  }
}

btnOpen.onclick = toggleMenu;

btnClose.onclick = toggleMenu;

// FORM VALIDATION

$("button").onclick = function () {
  const name = $("name").value;
  const email = $("email").value;
  const phoneNumber = $("phoneNumber").value;
  const gender = document.querySelector('input[name="gender"]:checked')
    ? document.querySelector('input[name="gender"]:checked').value
    : null;
  const city = $("city").value;
  const checked = $("confirm").checked;
  let isValid = true;
  function validateEmailRegex(email) {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    return emailRegex.test(String(email).toLowerCase());
  }

  console.log(email);
  console.log(validateEmailRegex(email));

  function isPhoneNumber(phoneNumber) {
    const phoneRegex = /^0(3[2-9]|5[689]|7[06-9]|8[1-689]|9[0-46-9])\d{7}$/;

    return phoneRegex.test(phoneNumber);
  }

  if (!name) {
    isValid = false;
    $("name").nextElementSibling.innerHTML = "Please enter your name";
  } else if (name.length < 6 || name.length > 32) {
    isValid = false;
    $("name").nextElementSibling.innerHTML =
      "Please enter your name between 6 and 32 characters long";
  } else {
    $("name").nextElementSibling.innerHTML = "";
  }
  if (!email) {
    isValid = false;
    $("email").nextElementSibling.innerHTML = "Please enter your email";
  } else if (email.length < 6 || email.length > 20) {
    isValid = false;
    $("email").nextElementSibling.innerHTML =
      "Please enter your email between 6 and 20 characters long";
  } else if (!validateEmailRegex(email)) {
    isValid = false;
    $("email").nextElementSibling.innerHTML = "Please enter a valid email";
  } else {
    $("email").nextElementSibling.innerHTML = "";
  }
  if (!phoneNumber) {
    isValid = false;
    $("phoneNumber").nextElementSibling.innerHTML =
      "Please enter your phone number";
  } else if (phoneNumber.length !== 10) {
    isValid = false;
    $("phoneNumber").nextElementSibling.innerHTML =
      "Please enter your phone number exactly 10 characters long";
  } else if (!isPhoneNumber(phoneNumber)) {
    isValid = false;
    $("phoneNumber").nextElementSibling.innerHTML =
      "Please enter a valid phone number";
  } else {
    $("phoneNumber").nextElementSibling.innerHTML = "";
  }
  if (!gender) {
    isValid = false;
    $("radioErr").innerHTML = "Please choose your gender";
  } else {
    $("radioErr").innerHTML = "";
  }
  if (!city) {
    isValid = false;
    $("city").nextElementSibling.innerHTML = "Please chose your city";
  } else {
    $("city").nextElementSibling.innerHTML = "";
  }
  if (!checked) {
    isValid = false;
    $("confirmErr").innerHTML = "Please accept the terms and conditions";
  } else {
    $("confirmErr").innerHTML = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
};
