function $(id) {
  return document.getElementById(id);
}

$("loginBtn").onclick = function () {
  const username = $("loginName").value;
  const password = $("loginPass").value;
  const loginRemember = $("loginRemember").checked;
  let isValid = true;

  if (!username) {
    isValid = false;
    $("loginName").nextElementSibling.innerHTML = "Vui lòng điền tên đăng nhập";
  } else if (username.length < 6 || username.length > 16) {
    isValid = false;
    $("loginName").nextElementSibling.innerHTML =
      "Tên đăng nhập từ 6 đến 16 ký tự";
  } else {
    $("loginName").nextElementSibling.innerHTML = "";
  }

  if (!password || password.length < 8) {
    isValid = false;
    $("loginPass").nextElementSibling.innerHTML = "Vui lòng điền tên mật khẩu";
  } else {
    $("loginPass").nextElementSibling.innerHTML = "";
  }

  if (isValid) {
    console.log("Đăng nhập thành công!");
  }
};

$("regisBtn").onclick = function () {
  const regisName = $("regisName").value;
  const regisPass = $("regisPass").value;
  const regisPassConfrim = $("regisPassConfrim").value;
  const regisGender = $("regisGender").value;
  const agreeCheck = $("agreeCheck").checked;
  let isValid = true;

  if (!regisName) {
    isValid = false;
    $("regisName").nextElementSibling.innerHTML = "Vui lòng điền tên đăng ký";
  } else if (username.length < 6 || username.length > 16) {
    isValid = false;
    $("loginName").nextElementSibling.innerHTML =
      "Tên đăng nhập từ 6 đến 16 ký tự";
  } else {
    $("loginName").nextElementSibling.innerHTML = "";
  }

  if (!regisPass || password.length < 8) {
    isValid = false;
    $("loginPass").nextElementSibling.innerHTML = "Vui lòng điền tên mật khẩu";
  } else {
    $("loginPass").nextElementSibling.innerHTML = "";
  }

  if (isValid) {
    console.log("Đăng ký thành công!");
  }
};
