// const formElement = document.querySelector(".login-form");

// formElement.addEventListener("submit", formSubmit);

// function formSubmit(event) {
//   event.preventDefault();

//   const form = event.target;

//   for (let i = 0; i < form.length - 1; i++) {
//     const element = form[i];

//     console.log(element.name, ": ", element.value);
//   }
// }

const eyeElement = document.querySelector(".eye");
const passwordInputElement = document.querySelector(".password-input");

eyeElement.addEventListener("click", toggleShowPassword);

function toggleShowPassword() {
  const passwordInputElementType = passwordInputElement.getAttribute("type");

  if (passwordInputElementType === "text") {
    passwordInputElement.setAttribute("type", "password");
  } else {
    passwordInputElement.setAttribute("type", "text");
  }
}
