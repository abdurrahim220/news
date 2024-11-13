import React from "react";
import { Input } from "../../ui/input";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
      <h3 className="text-center md:text-left">Search News</h3>
      <Input
        type="text"
        className="p-2 border rounded-md w-full md:w-[280px]"
        placeholder="Search news"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
