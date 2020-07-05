import React from "react";
import renderer from "react-test-renderer";
import MovieCardList from "./movie-card-list.jsx";

const filmList = [
  {
    genre: `Drama`,
    title: `Pulp Fiction`,
    img: `img/pulp-fiction.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Drama`,
    title: `No Country for Old Men`,
    img: `img/no-country-for-old-men.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Crime`,
    title: `Snatch`,
    img: `img/snatch.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Crime`,
    title: `Moonrise Kingdom`,
    img: `img/moonrise-kingdom.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Documentary`,
    title: `Seven Years in Tibet`,
    img: `img/seven-years-in-tibet.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Documentary`,
    title: `Midnight Special`,
    img: `img/midnight-special.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Comedie`,
    title: `War of the Worlds`,
    img: `img/war-of-the-worlds.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    genre: `Comedie`,
    title: `Dardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
];

it(`MovieCardList should render correctly`, () => {
  const onFilmImgClick = () => {};

  const tree = renderer.create(
      <MovieCardList
        filmList={filmList}
        onFilmImgClick={onFilmImgClick}
      />, {
        createNodeMock: ()=>{
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
