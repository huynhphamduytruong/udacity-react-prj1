import { useState } from "react";
import { BookShelves } from "../../constants";

export const BookShelfChanger = ({ book, shelf, onShelfChange }) => {
  const [selected, setSelected] = useState(shelf);

  const onSelectChange = (e) => {
    if (e.currentTarget.value !== book.shelf) {
      setSelected(e.currentTarget.value);
      onShelfChange(book, e.currentTarget.value);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={onSelectChange}>
        <option value="move" disabled>
          Move to...
        </option>
        {BookShelves.map((bs) => (
          <option key={bs.key} value={bs.key}>
            {bs.name}
          </option>
        ))}
      </select>
    </div>
  );
};
