// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

// For example...
// getProfit(cats) => -21166652

// function getProfit(movie: Movie): number{
// return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
// }

// function getProfit(movie: Movie): number {
// const { grossWorldwide, budget } = movie.boxOffice;
// return grossWorldwide - budget;
// }

function getProfit({ boxOffice: { grossWorldwide, budget } }: Movie): number {
    return grossWorldwide - budget;
    }
    
    console.log(getProfit(dune));
    console.log(getProfit(cats));