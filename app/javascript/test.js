console.log("hello from app/javascript/test.js! we are finally working");

// Get!!
// figure out how to use fetch and api's
//put it on the console first

// Manipulate!!
//search feature with angolia

//Display!!
//put on the screen in the correct order

const list = document.querySelector("#list-inline");


fetch("https://www.omdbapi.com/?s=fast%20and%20furious&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
