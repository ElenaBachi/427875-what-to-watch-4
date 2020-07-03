import React from "react";
import renderer from "react-test-renderer";
import MovieCardList from "./movie-card-list.jsx";

const films = [
  {
    title: `Pulp Fiction`,
    img: `img/pulp-fiction.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `No Country for Old Men`,
    img: `img/no-country-for-old-men.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `Snatch`,
    img: `img/snatch.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `Moonrise Kingdom`,
    img: `img/moonrise-kingdom.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `Seven Years in Tibet`,
    img: `img/seven-years-in-tibet.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `Midnight Special`,
    img: `img/midnight-special.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `War of the Worlds`,
    img: `img/war-of-the-worlds.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `Dardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
];

it(`MovieCardList should render correctly`, () => {
  const onFilmImgClick = () => {};

  const tree = renderer.create(
      <MovieCardList
        films={films}
        onFilmImgClick={onFilmImgClick}
      />, {
        createNodeMock: ()=>{
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
