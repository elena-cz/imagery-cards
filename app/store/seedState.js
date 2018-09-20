import CARDS from 'app/store/exampleCards';

const seedState = {

  current: {
    set: [],
    cardIndex: 0,
    cardId: null,
    category: 'JOURNEY',
  },

  cards: {
    byId: CARDS,
    allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },

  categories: {
    JOURNEY: {
      title: 'Journey',
      description: 'Tagline about Journey cards being specific exercises',
      allIds: [1, 2, 3, 4, 5],
      shuffledIds: [4, 2, 5, 1, 3],
      favoritedIds: [2, 4],
    },
    DEEPENING: {
      title: 'Deepening',
      description: 'Tagline about how Deepening cards bring you into a relaxed state',
      allIds: [6, 7, 8, 9],
      shuffledIds: [7, 9, 8, 6],
      favoritedIds: [7],
    },
    LIGHTENING: {
      title: 'Lightening',
      description: 'Tagline about how Lightening cards bring you back to awareness',
      allIds: [10, 11],
      shuffledIds: [11, 10],
      favoritedIds: [],
    },
  },

  favorites: {
    byId: {
      2: true,
      4: true,
      7: true,
    },
    allIds: [2, 4, 7],
  },

  customSets: {
    byId: {
      1: [9, 2, 4, 10],
    },
    allIds: [],
  },

};

export default seedState;
