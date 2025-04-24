function $(id) {
  return document.getElementById(id);
}

let username = "";
let password = "";

$("loginBtn").onclick = function () {
  const loginName = $("loginName").value;
  const loginPass = $("loginPass").value;
  const loginRemember = $("loginRemember").checked;
  let isValid = true;

  if (!loginName) {
    isValid = false;
    $("loginName").nextElementSibling.innerHTML = "Vui lòng điền tên đăng nhập";
  } else if (loginName.length < 6 || loginName.length > 16) {
    isValid = false;
    $("loginName").nextElementSibling.innerHTML =
      "Tên đăng nhập từ 6 đến 16 ký tự";
  } else {
    $("loginName").nextElementSibling.innerHTML = "";
  }

  if (!loginPass) {
    isValid = false;
    $("loginPass").nextElementSibling.innerHTML = "Vui lòng điền mật khẩu";
  } else if (loginPass.length < 8) {
    isValid = false;
    $("loginPass").nextElementSibling.innerHTML = "Mật khẩu tối thiểu 8 ký tự";
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
  } else if (regisName.length < 6 || regisName.length > 16) {
    isValid = false;
    $("regisName").nextElementSibling.innerHTML =
      "Tên đăng ký từ 6 đến 16 ký tự";
  } else {
    $("regisName").nextElementSibling.innerHTML = "";
  }

  if (!regisPass) {
    isValid = false;
    $("regisPass").nextElementSibling.innerHTML = "Vui lòng điền mật khẩu";
  } else if (regisPass.length < 8) {
    isValid = false;
    $("regisPass").nextElementSibling.innerHTML = "Mật khẩu tối thiểu 8 ký tự";
  } else {
    $("regisPass").nextElementSibling.innerHTML = "";
  }

  if (!regisPassConfrim) {
    isValid = false;
    $("regisPassConfrim").nextElementSibling.innerHTML =
      "Vui lòng xác nhận mật khẩu";
  } else if (regisPassConfrim !== regisPass) {
    isValid = false;
    $("regisPassConfrim").nextElementSibling.innerHTML =
      "Mật khẩu xác nhận không khớp";
  } else {
    $("regisPassConfrim").nextElementSibling.innerHTML = "";
  }

  if (isNaN(regisGender)) {
    isValid = false;
    $("regisGender").nextElementSibling.innerHTML = "Vui lòng chọn giới tính";
  } else {
    $("regisGender").nextElementSibling.innerHTML = "";
  }

  if (!agreeCheck) {
    isValid = false;
    $("agreeCheck").nextElementSibling.nextElementSibling.innerHTML =
      "Bạn phải đồng ý với điều khoản";
  } else {
    $("agreeCheck").nextElementSibling.nextElementSibling.innerHTML = "";
  }

  if (isValid) {
    username = regisName;
    password = regisPass;
    $("loginName").value = username;
    $("loginPass").value = password;
    alert("Đăng ký thành công!");
    $("pills-home-tab").click();
    console.log(username, password);
  }
};
