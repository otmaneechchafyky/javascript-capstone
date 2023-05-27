import GetPoke from './getpokemon.js';

export default class FetchMon {
  static fetchPoke = () => {
    for (let i = 1; i <= 15; i += 1) {
      GetPoke.getPokemon(i);
    }
  };
}