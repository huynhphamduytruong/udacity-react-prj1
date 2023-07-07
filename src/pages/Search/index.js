import { SearchBar } from "./SearchBar";
import { SearchResult } from "./SearchResult";

export const SearchBookPage = ({
  searchQuery,
  onSearch,
  onReset,
  books,
  searchResult,
  onShelfChange,
}) => {
  return (
    <div className="search-books">
      <SearchBar
        searchQuery={searchQuery}
        onSearch={onSearch}
        onReset={onReset}
      />
      <SearchResult
        books={books}
        searchResult={searchResult}
        onShelfChange={onShelfChange}
      />
    </div>
  );
};
