import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Common/Header";
import categoryMovies from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(data.results);
    }
    getData();
  }, []);
  return <Header />;
}
export default Home;
