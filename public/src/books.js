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
// one array for borrowed and one for returned
  const checkedOut = [];
  const notCheckedOut = [];

  for (const book of books) {
    const borrowed = book.borrows[0];
//if book is returned push to array [notCheckedOut]
    if (borrowed.returned) {
      notCheckedOut.push(book);
//else- book not returned - push to array [checkedOut]
    } else {
      checkedOut.push(book);
    }
  }
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
