import React from "react";

const Search = () => {
  return (
    <>
      <form className="w-3/5" onSubmit={console.log("Search submited")}>
        <input
          type="text"
          className="rounded-md border-0 text-slate-200 bg-transparent/50 w-full text-sm p-2.5 focus:ring-2 focus:ring-cyan-600"
          placeholder="Search for a movie, series, person..."
        />
      </form>
    </>
  );
};

export default Search;
