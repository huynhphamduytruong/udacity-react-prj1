import { SearchButton } from "../../components/List/SearchButton";
import { ListBookContent } from "./ListBookContent";

export const ListBookPage = ({ bookshelves, books, onShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <ListBookContent
        bookshelves={bookshelves}
        books={books}
        onShelfChange={onShelfChange}
      />
      <SearchButton />
    </div>
  );
};
