import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
  }

  let apiKey = "bec049cdcofb5t08d94f2fc0c3440fa3";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

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
