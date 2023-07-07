import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const SearchInput = ({ query, onChange }) => {
  // const [query, setQuery] = useState("");

  const onInputChange = (e) => {
    // setQuery(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={query}
        onChange={onInputChange}
        autoFocus
      />
    </div>
  );
};
