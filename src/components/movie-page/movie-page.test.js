import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const mock = {
  film: {
    title: `Fantastic Beasts`,
    genre: `Genre`,
    year: 2020,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Enim praesent elementum facilisis leo. In est ante in nibh mauris cursus mattis. Gravida arcu ac tortor dignissim convallis aenean et. Eleifend donec pretium vulputate sapien nec sagittis.`,
    rating: {
      score: `9,9`,
      level: `Awesome`,
      count: `999`,
    },
    director: `Wes Andreson`,
    actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    fullActorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  films: [
    {
      genre: `Genre`,
      title: `Pulp Fiction`,
      img: `img/pulp-fiction.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Genre`,
      title: `No Country for Old Men`,
      img: `img/no-country-for-old-men.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Genre`,
      title: `Snatch`,
      img: `img/snatch.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Genre`,
      title: `Moonrise Kingdom`,
      img: `img/moonrise-kingdom.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Genre`,
      title: `Seven Years in Tibet`,
      img: `img/seven-years-in-tibet.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Genre`,
      title: `Midnight Special`,
      img: `img/midnight-special.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
  ],
  tabList: {
    FIRST: `First Tab`,
    SECOND: `Second Tab`,
    THIRD: `Third Tab`,
  },
};

it(`MoviePage should render correctly`, () => {
  const activeTab = Object.keys(mock.tabList)[0];

  const tree = renderer.create(
      <MoviePage
        film={mock.film}
        films={mock.films}
        tabList={mock.tabList}
        onTabChange={() => {}}
        onTabClickRender={() => {}}
        activeTab={activeTab}
      />, {
        createNodeMock: () => {
          return {};
        }}).toJSON();

  expect(tree).toMatchSnapshot();
});
