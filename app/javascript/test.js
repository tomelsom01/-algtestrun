const { preventOverflow } = require("@popperjs/core");

console.log("hello from app/javascript/test.js! we are finally working");

// Get!!
// figure out how to use fetch and api's
//put it on the console first

// Manipulate!!
//search feature with angolia

//Display!!
//put on the screen in the correct order

const list = document.querySelector("#list-inline");

const fetchMovies = () => {
  fetch("https://www.omdbapi.com/?s=fast%20and%20furious&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    data.Search.forEach(result => {
      console.log(result);
      const movie = `<li class="list-inline-item">
        <img src="${result.Poster}">
        <p>${result.Title}</p>
      </li>
      `;
      list.insertAdjacentHTML("beforeend", movie);
    });
  });
};

const form = document.getElementById("search-form");

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const input = event.currentTarget.querySelector("#search-input");
  console.log(input);
});
