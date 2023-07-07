import { BookShelf } from "../../components/BookShelf";

export const ListBookContent = ({ bookshelves, books, onShelfChange }) => {
  return (
    <div className="list-books-content">
      {bookshelves?.map((shelf, idx) => (
        <BookShelf
          key={idx}
          shelf={shelf}
          books={books}
          onShelfChange={onShelfChange}
        />
      ))}
    </div>
  );
};
