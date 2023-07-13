const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.getElementById("email");
  const passwordValue = document.getElementById("password");

  console.log(emailValue.value);
  console.log(passwordValue.value);
  fetch("https://reqres.in/api/register", {
    method: "Post",
    headers: { "Content-Type": "application/json" }
  })
};

const form = document.querySelector("#form");
form.addEventListener("submit", signUp);
