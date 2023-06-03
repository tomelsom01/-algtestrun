console.log("hello from app/javascript/test.js! we are finally working");

// Get!!
// figure out how to use fetch and api's
//put it on the console first

// Manipulate!!
//search feature with angolia

//Display!!
//put on the screen in the correct order

fetch("https://gist.githubusercontent.com/alexandremeunier/49533eebe2ec93b14d32b2333272f9f8/raw/924d89e2236ca6fa2ade7481c91bfbf858c49531/movies.json")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
