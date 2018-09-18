import CARDS from 'app/exampleCards';

const allCards = Object.keys(CARDS).map(id => +id);

const filterByCategory = category => allCards.filter(id => CARDS[id].category === category);


const SETS = {

  ALL_CARDS: allCards,

  JOURNEY: filterByCategory('JOURNEY'),

  DEEPENING: filterByCategory('DEEPENING'),

  LIGHTENING: filterByCategory('LIGHTENING'),

  MIXED: [1, 2, 7, 8, 10, 11],
};


export default SETS;
