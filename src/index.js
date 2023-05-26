import './style.css';

import FetchMon from './modules/pokefetchfunction.js';

document.getElementById('poke-logo').textContent = 'POKEMON';

FetchMon.fetchPoke();
