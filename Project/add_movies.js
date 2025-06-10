let movieWatchList = [];
let nextMovieId =1;

const movieGenres ={
    Action: "Action",
    Comedy:"Comedy",
    Drama:"Drama",
    Fantasy: "Fantasy",
    Horror: "Horror",
    Si_fi:"Sci-fi",
    Thriller:"Thriller",
    Animation:"Animation",
}
function createMovie(title,gener,year,rating){
    return{
        id:nextMovieId++,
        title,
        gener,
        year,
        rating,
        watched:false
    };
}; 

function addMovie(title,gener,year,rating){
    const newMovie = createMovie(title,gener,year,rating);

    return movieWatchList.push(newMovie);
}

function editMovie(id,newTitle,newGener,newYear,newRating){
    const movie= movieWatchList.find(movie=> movie.id===id);
    if(!movie){
        console.log(`Movie Not Found with ID: ${id} & Title: ${newTitle}`);
        return;
    }

    movie.title = newTitle?? movie.title;
    movie.gener =newGener?? movie.gener;
    movie.year =newYear?? movie.year;
    movie.rating =newRating?? movie.rating;
}

function toggleWatched(id){
        const movie= movieWatchList.find(movie=> movie.id===id);

    if(!movie){
        console.log(`Movie Not Found with ID: ${id} `);
        return;
    }
    movie.watched =!movie.watched;

    return movie.watched;
}

function removeMovie(id){
    // movieWatchList= movieWatchList.filter(movie=> movie.id!==id); filter method
    const movieIndex = movieWatchList.findIndex(movie => movie.id ===id);

    if(movieIndex !== -1){
        movieWatchList.splice(movieIndex,1)
    }
}

function findMovieByName(name){
    const movie = movieWatchList.find(movie => movie.title.toLowerCase()===name.toLowerCase());
    if(!movie){
        console.log(`Movie Not Found with Name: ${name} `);
        return;
    }
   printMovieDetails(movie);
    
}
function viewAllMovies(filter="all",sortkey="title"){
    const filteredMovies = filterMovies(filter);
    const sortedMovies = sortMovies(filteredMovies,sortkey);
    if(sortedMovies.length===0){
        console.log("The watchList is Empty");
        return;
    }
    console.log(`${filter} Movies, Sorted by ${sortkey}`);
    
    for(let movie of movieWatchList){
            printMovieDetails(movie);
    }
}
function printMovieDetails(movie){
    console.log(`Movie Found: ${movie.title}, \nGenre: ${movie.gener}, \nYear: ${movie.year}, \nRating: ${movie.rating}, \nWatched: ${movie.watched}`);
 
}

function filterMovies(filter){
    switch(filter){
        case "all": return movieWatchList;
        case "watched": return movieWatchList.filter(movie => movie.watched);
        case "unwatched": return movieWatchList.filter(movie => !movie.watched);
        default: return [];
    }
}

function displayFilteredMovies(filter="all"){
    const filteredMovies =filterMovies(filter);

    if(filteredMovies.length ===0){
        console.log("No movies found for this filter");
        return;
    }
    console.log(`${filter}: Movies`);
    filteredMovies.forEach(movie=>printMovieDetails(movie));
    
}

function sortMovies(movies,key){
    switch(key){
        case "title":
        case "gener":
            return[...movies].sort((a,b)=> a[key].localeCompare(b[key]));
        case "year":
            return[...movies].sort((a,b)=> a.year -b.year);
        case "rating":
            return [...movies].sort((a,b)=> b.rating -a.rating);
        default: 
            return [];
    }
}

addMovie("The Witch",movieGenres.Drama,2015,4.5);
addMovie("Inception",movieGenres.Si_fi,2010,4.8);


editMovie(1,"The Witch",movieGenres.Horror);
// editMovie(3,"The Witch",movieGenres.Horror);


console.log(toggleWatched(1));
// console.log(toggleWatched(1));



// console.log(movieWatchList[0]);
// console.log(movieWatchList[1]);

// removeMovie(2)
// console.log(movieWatchList);

// findMovieByName("Inception");
// findMovieByName("Dhoom");
viewAllMovies("watched","rating");

// displayFilteredMovies();
// displayFilteredMovies("watched");
// displayFilteredMovies("unwatched");