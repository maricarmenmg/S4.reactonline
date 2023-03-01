
// NIVEL 1

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const allDirectors = array.map(movies => movies.director);
  console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(movies => movies.director === director);
  console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const moviesOfDirector = array.filter(movies => movies.director === director);
  const averageMoviesOfDirector = moviesOfDirector.reduce((acc, movies) => acc + movies.score, 0) ;
  console.log("EXERCICE 3 ->", averageMoviesOfDirector);
  return averageMoviesOfDirector / moviesOfDirector.length.toFixed(2);

}

// Exercise 3: Calculate the average of the films of a given director.
/*function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = array.filter((film) => film.director === director);
  const averageScore = moviesFromDirector.reduce((acc, cur) => acc + cur.score, 0)
  console.log("EXERCICE 3 ->", averageScore);
  return averageScore / moviesFromDirector.length.toFixed(2)
}*


function moviesAverageOfDirector(movies, targetDirector) {
  const filteredMovies = movies.filter(({ director }) => director === targetDirector);
  const sum = filteredMovies.reduce((acc, { rating }) => acc + rating, 0);
  return filteredMovies.length ? sum / filteredMovies.length : 0;
}*/



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
