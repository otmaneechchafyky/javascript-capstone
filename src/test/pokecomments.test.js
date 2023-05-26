import Comments from '../modules/comments.js';

test('pokemons counter', () => {
  const pokeID = [1, 2, 3, 4, 5, 6, 7];
  const countPokemons = Comments.countFn(pokeID);
  expect(countPokemons).toBe(7);
});
