import TrelloWidget from './TrelloWidget';

const container = document.querySelector('.container');

const trello = new TrelloWidget(container);
trello.activation();
const storage = localStorage.getItem('cards');

if (storage) {
  trello.renderingCards(JSON.parse(storage));
}
