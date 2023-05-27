import './style/main.css';

import FetchMon from './modules/pokefetchfunction.js';
import GetPoke from './modules/getpokemon.js';

document.getElementById('poke-logo').textContent = 'POKEMON';

FetchMon.fetchPoke();
GetPoke.commentFn();
