function getTotalBooksCount(books) {
  let totalBooks = 0;
  for (const book in books){
    totalBooks += 1;
  }
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((totalAccounts) => totalAccounts += 1 , 0); 
  }

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  for(const book of books){
    const borrowed = book.borrows[0];
    if(!borrowed.returned){
      borrowedBooks++;
    }
  }
  return borrowedBooks;
}

//sorts using sortByCount helper function
function _sortByCount(array){
  return array.sort((a,b) => a.count > b.count ? -1 : 1)
}

function getMostCommonGenres(books) {
const genreCounts = {};

  for(const book of books){
    const genre = book.genre;
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
  }

  const genreArray = Object.keys(genreCounts).map((genre) => ({
    name: genre,
    count:genreCounts[genre],
  }));

  return _sortByCount(genreArray).slice(0,5);
}

function getMostPopularBooks(books) {
  const bookCounts = {};

  for(const book of books){
    const borrowCount = book.borrows.length;
    bookCounts[book.title] = borrowCount;
  }
  const bookArray = Object.keys(bookCounts).map((title)=> ({
    name: title,
    count: bookCounts[title],
  
  }));
  
  return _sortByCount(bookArray).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const authorCounts = {};

  for(const book of books){
    const authorId = book.authorId;
    const borrowCount = book.borrows.length;
    if(!authorCounts[authorId]){
      authorCounts[authorId] = 0;
    }
    authorCounts[authorId] += borrowCount;
  }
  const authorArray = authors.map((author) => ({
    name: `${author.name.first} ${author.name.last}`,
    count: authorCounts[author.id] || 0,
  }));
  
  return _sortByCount(authorArray).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

