import React from 'react'
import Carousel from 'react-multi-carousel';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
    width: "100%",
    marginTop:20,
  });
  const Title=styled(Typography)`
  color:#FFFFFF;
  `
function Slide({movies}) {
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    infinite={true}
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    slidesToSlide={1}
  >
    {movies.map((movie) => {
      return (
        <>
        <StyledBanner
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="banner"
        />
        <Title>{movie.original_title}</Title>
        </>
      );
    })}
  </Carousel>
  )
}

export default Slide;