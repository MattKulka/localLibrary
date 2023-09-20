function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 :1)
}

function getTotalNumberOfBorrows(account, books) {
  let totalNumberOfBorrows = 0;
  for (const book of books) {
    if (book.borrows.some(borrow => borrow.id === account.id)) {
      totalNumberOfBorrows += 1;
    }
  }
  return totalNumberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors){
  const checkedOutBooks = [];

  for(const book of books){
    const [mostRecentBorrow] = book.borrows;

    if (mostRecentBorrow.id === account.id && !mostRecentBorrow.returned){
      const author = authors.find((author) => author.id === book.authorId);
  
      checkedOutBooks.push({
        ...book,
        author,
      });
    }
  }
  return checkedOutBooks;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
