const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(pelicula=>pelicula.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}



// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const pelpDirector= array.filter(pelicula=>pelicula.director===director);
  
  console.log("EXERCICE 2 ->", pelpDirector);
  return pelpDirector;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array,director) {

 
  const directores= getMoviesFromDirector(array, director)
  const totalScore = directores.reduce((acu, movie) => acu += movie.score, 0);
  let averageScore = totalScore / directores.length;
  averageScore=parseFloat(averageScore)


  console.log("EXERCICE 3 -> ", averageScore);
  
  return averageScore;
  
 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let pelicula =  array.map(pelicula=>pelicula.title);
  const ordenAlpha= pelicula.sort((a,b)=>{
    const peliculaA= a.title.toLowerCase();
    const peliculaB= b.title.toLowerCase();
    if(peliculaA<peliculaB){
      return -1;
    }
    if(peliculaA>peliculaB){
      return 1;
    }
    return 0;

  });

  console.log("EXERCICE 4 ->",ordenAlpha.splice(0,20));

  return  ordenAlpha.splice(0,20);

  
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
