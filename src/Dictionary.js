import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition.`);
  }

  return (
    <div className="Dctionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
