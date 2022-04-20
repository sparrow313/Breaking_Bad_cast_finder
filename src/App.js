import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/characters/CharactersGrid";
import Search from "./components/UI/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLaoding] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLaoding(false);
      console.log(result.data);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
