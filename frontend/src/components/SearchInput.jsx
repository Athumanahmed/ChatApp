import React from "react";
import { Search } from "lucide-react";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
      />

      <button type="submit" className="btn btn-circle ">
        <Search />
      </button>
    </form>
  );
};

export default SearchInput;
