const formEl = document.querySelector(".login-form");
const inputs = document.querySelectorAll(".login-form input");

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const emailEl = event.currentTarget.elements.email.value;
  const passwordEl = event.currentTarget.elements.password.value;
  const account = {
    email: emailEl,
    password: passwordEl,
  };

  if (emailEl === "" || passwordEl === "") {
    console.log(alert("All fields must be filled"));
    return;
  } else if (emailEl !== "" || passwordEl !== "") {
    console.log(`Email: ${account.email} \nPassword: ${account.password}`);
    formEl.reset();
  }
}
