import React, { useState, useEffect } from "react";
import Loadin from "./components/loading/loadin.component";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./app.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // using ONE useEffect(); function
  useEffect(() => {
    if (monsters.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setMonsters(data));
    }
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchText]);

  // using TWO useEffect(); functions
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setMonsters(data));
  // }, []);
  // useEffect(() => {
  //   const newFilteredMonsters = monsters.filter((monster) =>
  //     monster.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setFilteredMonsters(newFilteredMonsters);
  // }, [monsters, searchText]);

  const monsterSearch = (queryText) => {
    setSearchText(queryText);
  };

  if (monsters.length === 0) {
    return <Loadin />;
  }

  return (
    <div>
      <div className="title"> Monsters Rolodex </div>
      <SearchBox
        onChangeHandler={monsterSearch}
        placeholder="Search Monster..."
      />
      <CardList filteredArray={filteredMonsters} />
    </div>
  );
}

export default App;
