const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.getElementById("email");
  const passwordValue = document.getElementById("password");

  console.log(emailValue.value);
  console.log(passwordValue.value);
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailValue.value, password: passwordValue.value })
    })
    .then(response => response.json())
    .then((data) => console.log(data))
};

const form = document.querySelector("#form");
form.addEventListener("submit", signUp);

