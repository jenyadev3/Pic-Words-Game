const TIMEOUT = 800;
const LIVES_COUNT = 3;

const AppRoute = {
    Initial: 'initial',
    Game: 'game',
    Results: 'results',
}

const RANDOMIZED = false;

// В разметке экрана есть три одинаковых элемента кнопки, которые отличаются подписями и иконками. 
// К каждой кнопке привязан свой набор слов для игры.

const GAME_TYPES = [
    { type: 'finnish', icon: 'fin', label: 'aloittaa' },
    { type: 'german', icon: 'ger', label: 'beginnen' },
    { type: 'italian', icon: 'ita', label: 'iniziare' },
  ];
  

window.TIMEOUT = TIMEOUT;
window.LIVES_COUNT = LIVES_COUNT;
window.AppRoute = AppRoute;
window.GAME_TYPES = GAME_TYPES;
window.RANDOMIZED = RANDOMIZED;