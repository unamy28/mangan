// Tambahkan kode JavaScript kalian di file ini
// togle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
}
function isNumber(inputString) {
  return !isNaN(inputString);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  if (
    formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked(formData.status)
  ) {
    return true;
  }
  return false;
}

function submit() {
  const formData = handleGetFormData();
  const isFormValid = validateFormData(formData);
  const warning = document.getElementById("warning");
  if (!isFormValid) {
    warning.style.visibility = "visible";
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    warning.style.visibility = "hidden";
    warning.innerHTML = "";
  }
}

document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();
  submit();
});
