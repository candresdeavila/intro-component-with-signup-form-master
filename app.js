const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  validateField(firstName, "First Name cannot be empty");
  validateField(lastName, "Last Name cannot be empty");
  validateEmail(email);
  validateField(password, "Password cannot be empty");
});

function validateField(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  if (input.value.trim() === "") {
    formControl.classList.add("error");
    small.textContent = message;
  } else {
    formControl.classList.remove("error");
  }
}

function validateEmail(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (input.value.trim() === "") {
    formControl.classList.add("error");
    small.textContent = "Email cannot be empty";
  } else if (!regex.test(input.value.trim())) {
    formControl.classList.add("error");
    small.textContent = "Looks like this is not an email";
  } else {
    formControl.classList.remove("error");
  }
}
