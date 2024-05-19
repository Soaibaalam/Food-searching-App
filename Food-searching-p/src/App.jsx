import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFood = async () => {
    const APP_ID = "6269ac8d";
    const APP_KEY = "a9d167c000e48adab0c9063db20344aa	";
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      setAllFood(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <ProductCard allFood={allFood} loading={loading} />
    </div>
  );
};

export default App;
