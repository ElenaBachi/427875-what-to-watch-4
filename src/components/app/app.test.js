import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";

const mockStore = configureStore([]);

const mock = {
  promoFilm: {
    promo: true,
    title: `Some movie`,
    genre: `Family`,
    year: 2020,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  films: [
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
  ],
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
  },
};


describe(`Render App`, () => {
  it(`Should render App correctly`, () => {
    const store = mockStore({
      currentGenre: `All genres`,
      filmList: mock.films,
      filmCount: 8,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            promoFilm={mock.promoFilm}
            films={mock.films}
            film={mock.film}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
