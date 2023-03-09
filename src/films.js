
// Materiales de apoyo  ⚡️  https://youtu.be/5yPf74sCu2k  ⚡️  https://youtu.be/tP8JiVUiyDo  ⚡️  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


// Nivell 1 ⤵ 


// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const allDirectors = array.map(movies => movies.director);
  //console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(movies => movies.director === director);
  //console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesOfDirector = array.filter(movies => movies.director === director);
  const averageMoviesOfDirector = moviesOfDirector.reduce((acc, movies) => acc + movies.score, 0) ;
  //console.log("EXERCICE 3 ->", averageMoviesOfDirector);
  return averageMoviesOfDirector / moviesOfDirector.length.toFixed(2);
}


// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const orderByTitle = array.map(movie => movie.title);
  const firstTwentyMovies = orderByTitle.sort().slice(0, 20);
  //console.log("EXERCICE 4 ->", firstTwentyMovies);
  return firstTwentyMovies;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderMoviesYear = [...array].sort((a, b) => { return (a.year - b.year) || (a.title.localeCompare(b.title))})
  //console.log("EXERCICE 5 ->", orderMoviesYear);
  return orderMoviesYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const averageByCat = array.filter(element => { 
         if (typeof(element.score) !== "number");
              else return element.genre.includes(category);
  });

  const average = Number((averageByCat.reduce((acc, cur) => acc + cur.score, 0) / averageByCat.length).toFixed(2));
  //console.log("EXERCISE 6 ->", average);
  return average;
}


// Nivell 2 ⤵ 

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(movies) {
  return movies.map(movie => {
    const newMovie = { ...movie }; // create a copy of the movie object
    const durationArray = newMovie.duration.split(' '); // split the duration string by spaces
    let minutes = 0;
    for (let i = 0; i < durationArray.length; i++) {
      const durationPart = durationArray[i];
      if (durationPart.includes('h')) { // duration part is hours
        minutes += parseInt(durationPart) * 60;
      } else if (durationPart.includes('min')) { // duration part is minutes
        minutes += parseInt(durationPart);
      }
    }
    newMovie.duration = minutes; // replace duration string with duration in minutes
    //console.log("EXERCISE 7 ->", newMovie);
    return newMovie;
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  const newBestFilm = [...array];
  const moviesOfYear = newBestFilm.filter((movie) => movie.year === year);
  const bestFilmOfYear = moviesOfYear.reduce((best, current) => best.score >= current.score ? best : current);
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

