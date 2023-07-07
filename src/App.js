import { useEffect, useState } from "react";
import * as BookAPI from "./BooksAPI";
import * as Constants from "./constants";
import { Route } from "react-router-dom";
import { SearchBookPage } from "./pages/Search";
import { ListBookPage } from "./pages/List";
import { useDebouncedCallback } from "use-debounce";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");

  useEffect(() => {
    BookAPI.getAll().then((b) => setBooks(b));
  }, []);

  const moveBookToShelf = (book, shelf) => {
    // Call Update API
    BookAPI.update(book, shelf);

    // Set state
    setBooks((oldBooks) => {
      let draft = [...oldBooks];
      if (!draft.find((b) => b.id === book.id)) draft.push(book);

      return draft.map((b) => {
        if (b.id === book.id) b.shelf = shelf;

        return b;
      });
    });
  };

  const onBookSearchingDebounced = useDebouncedCallback((query) => {
    if (!query || query.length <= 0) {
      // setCurrentSearchQuery("");
      setSearchBooks([]);
      return;
    }

    // setCurrentSearchQuery(query);
    // Call API
    BookAPI.search(query).then((result) => {
      setSearchBooks(result.error ? [] : result);
    });
  }, 250);

  const onBookSearching = (query) => {
    setCurrentSearchQuery(query);

    onBookSearchingDebounced(query);
  };

  const onResetQuery = () => {
    setCurrentSearchQuery("");
    setSearchBooks([]);
  };

  return (
    <div className="app">
      <Route
        path="/"
        exact
        render={() => (
          <ListBookPage
            bookshelves={Constants.BookShelves.filter((bs) => bs.renderOnView)}
            books={books}
            onShelfChange={moveBookToShelf}
          />
        )}
      />
      <Route
        path="/search"
        component={() => (
          <SearchBookPage
            searchQuery={currentSearchQuery}
            onSearch={onBookSearching}
            onReset={onResetQuery}
            books={books}
            searchResult={searchBooks}
            onShelfChange={moveBookToShelf}
          />
        )}
      />
    </div>
  );
}

export default App;
