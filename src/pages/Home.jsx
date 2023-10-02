import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Common/Header";
import categoryMovies from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { Box } from "@mui/material";
import Banner from "../Components/Banner";
import UpNext from "../Components/UpNext";
import styled from "@emotion/styled";
const Wrapper = styled(Box)`
  padding: 20px 0;
  display: flex;
`;
const Component = styled(Box)`
  padding: 0 115px;
`;
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(data.results);
    }
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
      </Component>
    </>
  );
}
export default Home;
