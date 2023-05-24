const formEl = document.querySelector(".login-form");
const inputs = document.querySelectorAll(".login-form input");

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
    const formData = {
        email,
        password
  }

  if (email === "" || password === "") {
    console.log(alert("All fields must be filled"));
    return;
  } else if (email !== "" || password !== "") {
    console.log(formData);
    formEl.reset();
  }
}
