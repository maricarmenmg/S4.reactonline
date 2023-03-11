
// Materiales de apoyo  ⚡️  https://youtu.be/5yPf74sCu2k  ⚡️  https://youtu.be/tP8JiVUiyDo  ⚡️  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

/*
 ⚡️
.map() Crea un nuevo array con los elementos de un array que se pasan como parámetro.
.filter() Crea un nuevo array con los elementos de un array que se pasan como parámetro.
.sort() Ordena los elementos de un array.
.slice() Crea un nuevo array con los elementos de un array que se pasan como parámetro.
.reduce() Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
.localeCompare() Compara dos strings en orden alfabético.
 ⚡️
*/

//  Nivell 1 ★⤵ 


// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const allDirectors = array.map(movies => movies.director); // ⚡️ .map create a copy of the array of movies
  //console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(movies => movies.director === director); // ⚡️ .filter the array to get the movies of the director
  //console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesOfDirector = array.filter(movies => movies.director === director); // filter the array to get the movies of the director  
  const averageMoviesOfDirector = moviesOfDirector.reduce((acc, movies) => acc + movies.score, 0) ; // calculate the average of the movies of the director
  //console.log("EXERCICE 3 ->", averageMoviesOfDirector);
  return averageMoviesOfDirector / moviesOfDirector.length.toFixed(2);  // calculate the average of the movies of the director
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const orderByTitle = array.map(movie => movie.title); // create a copy of the array
  const firstTwentyMovies = orderByTitle.sort().slice(0, 20); // slice the array to get the first 20 elements
  //console.log("EXERCICE 4 ->", firstTwentyMovies);
  return firstTwentyMovies;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderYear = [...array].sort((a, b) => { return (a.year - b.year) || (a.title.localeCompare(b.title))})  // sort the array by year
  //console.log("EXERCICE 5 ->", orderYear);
  return orderYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const averageByCat = array.filter(element => {  // filter the array to get the movies of the category
         if (typeof(element.score) !== "number"); // check if the element is a movie
              else return element.genre.includes(category);   
  });

  const average = Number((averageByCat.reduce((acc, cur) => acc + cur.score, 0) / averageByCat.length).toFixed(2)); // calculate the average of the movies of the category
  //console.log("EXERCISE 6 ->", average);
  return average;
}


// Nivell 2 ★★ ⤵ 

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(movies) {
  return movies.map(movie => {
    const newMovie = { ...movie }; // create a copy of the movie object
    const durationArray = newMovie.duration.split(' '); // split the duration string by spaces
    let minutes = 0;
     for (let i = 0; i < durationArray.length; i++) {
       const durationPart = durationArray[i];
          if (durationPart.includes('h')) { // duration part is hours
        minutes += parseInt(durationPart) * 60; // multiply the hours by 60 to get the minutes
          } else if (durationPart.includes('min')) { // duration part is minutes
        minutes += parseInt(durationPart); // add the minutes to the minutes  
      }
    }
    newMovie.duration = minutes; // replace duration string with duration in minutes
    //console.log("EXERCISE 7 ->", newMovie);
    return newMovie;
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  const newBestFilm = [...array]; // create a copy of the array
  const moviesOfYear = newBestFilm.filter((movie) => movie.year === year);  // filter the array to get the movies of the year
  const bestFilmOfYear = moviesOfYear.reduce((best, current) => best.score >= current.score ? best : current);  // get the best film of the year
  const highestScoreOfYear = bestFilmOfYear.score;  
  const bestMovieOfYear = moviesOfYear.filter((movie) => movie.score === highestScoreOfYear    
);
  
  //console.log("EXERCICE 8 ->", bestMovieOfYear);
  return bestMovieOfYear;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

