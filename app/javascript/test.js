const { preventOverflow } = require("@popperjs/core");


// Get!!
// figure out how to use fetch and api's
//put it on the console first

// Manipulate!!
//search feature with angolia

//Display!!
//put on the screen in the correct order

const list = document.querySelector("#list-inline");

const fetchMovies = (movieRequest) => {
  fetch(`https://www.omdbapi.com/?s=${movieRequest}&apikey=adf1f2d7`)
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
  list.innerHTML = "";
  fetchMovies(input.value);
});
