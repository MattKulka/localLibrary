function findAuthorById(authors, id){
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id ===id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  // creates an array with 2 arrays inside of it
  // one array for checked out and one for not checked out
  let checkedOut = [];
  let notCheckedOut = [];

  // filter the books based on their borrowed status
  checkedOut = books.filter(book => book.borrows[0].returned === false);
  notCheckedOut = books.filter(book => book.borrows[0].returned === true);

  // return partitionedBooks array
  return [checkedOut, notCheckedOut];
}

function getBorrowersForBook(book, accounts) {
// an array of borrowers
  const borrowers = [];

  for (const borrow of book.borrows) {
    const borrowerAccount = accounts.find((borrowerAccount) => borrowerAccount.id === borrow.id);
    borrowerAccount.returned = borrow.returned;
//borrowerAccount is pushed to the borrowers array
    borrowers.push(borrowerAccount);
  }
// return first 10 elements of the  borrowers array
  return borrowers.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
