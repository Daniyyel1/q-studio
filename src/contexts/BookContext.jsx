import { createContext, useEffect, useState } from "react";

const BookContext = createContext({}); //creating book context here

// function to get book from localStorage (.i.e to persist the book added to cart)
const getBooksFromStorage = () => {
  const selectedBooks = localStorage.getItem("selectedBooks");
  const parsedBooks = selectedBooks ? JSON.parse(selectedBooks) : selectedBooks;
  return Array.isArray(parsedBooks) ? parsedBooks : [];
};

// book provider function
export const BookProvider = ({ children }) => {
  const [addedBook, setAddedBook] = useState(getBooksFromStorage());

  // function to add book to cart
  const addToCart = (book) => {
    const exist = addedBook.find((x) => x.id === book.id);
    if (exist) {
      setAddedBook(
        addedBook.map((x) =>
          x.id === book.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setAddedBook([...addedBook, { ...book, qty: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedBooks", JSON.stringify(addedBook));
  }, [addedBook]);

  // function to delete/remove book from Cart
    const removeFromCart = (bookId) => {
      const exist = addedBook.find((x) => x.id === bookId);
      if (exist.qty === 1) {
        setAddedBook(addedBook.filter((x) => x.id !== bookId));
      } else {
        setAddedBook(
          addedBook.map((x) =>
            x.id === bookId ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

  return (
    <BookContext.Provider
      value={{
        addedBook,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
