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
  
  let averageScore = calculateMedia(directores);


  console.log("EXERCICE 3 -> ", averageScore);
  
  return averageScore;
  
 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let pelicula =  array.map(pelicula=>pelicula.title);
  const ordenAlpha= pelicula.sort((a,b)=>{
    const peliculaA= a.toLowerCase();
    const peliculaB= b.toLowerCase();
    if(peliculaA<peliculaB){
      return -1;
    }
    if(peliculaA>peliculaB){
      return 1;
    }
    return 0;

  });
  const vintTitle= ordenAlpha.slice(0,20); 

  console.log("EXERCICE 4 ->",vintTitle);

  return  vintTitle;

  
}

// Exercise 5: Order by year, ascending
function orderByYear(pelicula) {

  const ordenAsc= pelicula.slice();// retorna una copia del array de peliculas en uno nuevo asi no modifico el original
   ordenAsc.sort((a,b)=>{
  
    if(a.year===b.year){   //si el año es el mismo  entonces que me lo compare por titulo
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;  
    

  });
  

  console.log("EXERCICE 6 ->",ordenAsc);

  return  ordenAsc;

  


}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(peliculas,genreSearch) {
  
 
  const pelpCategory= peliculas.filter(pelicula=>pelicula.genre==genreSearch);
  
  if (pelpCategory.length === 0) {
    return 0.0;
  }

   const movieCategory= calculateMedia(pelpCategory);

  console.log("EXERCICE 6 ->", movieCategory);

  return movieCategory;
  
  

}
 function calculateMedia (array){
 
  const totalScore = array.reduce((acumulador, movie) => {
    if (typeof movie.score === 'number' && movie.score !== 0) {
      return acumulador + movie.score;
    } else {
      return acumulador;
    }
  }, 0);

  const validMoviesCount = array.filter((movie) => typeof movie.score === 'number' && movie.score !== 0).length;

  if (validMoviesCount === 0) {
    return 0.0;
    
  }

  const averageScore = totalScore / validMoviesCount;

  return parseFloat(averageScore.toFixed(2));
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
