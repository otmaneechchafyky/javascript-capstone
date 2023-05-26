import Populate from './populatepoke.js';
import Comments from './comments.js';

const popUp = document.querySelector('.pop-up');
const form = document.querySelector('.add-comment');
const popTitle = document.querySelector('.pop-title');
const popTop = document.querySelector('.pop-top');
const desc1 = document.querySelector('.desc-1');
const desc2 = document.querySelector('.desc-2');
const shadow = document.querySelector('#shadow');
const dispComment = document.querySelector('.display-comments');
export default class GetPoke {
  static getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    Populate.populatePoke(pokemon);
    this.createModal();
    this.getCount();
  };

  static getCount = () => {
    const pokes = document.querySelectorAll('.poke-card');
    const count = this.counterPoke(pokes);
    const counters = document.querySelector('.poke-count');
    counters.textContent = `Pokemons (${count})`;
    counters.classList.add('adding');
  };

  static counterPoke = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
      count += 1;
    }
    return count;
  };

  static createModal = () => {
    const commentButtons = document.querySelectorAll('.comment-button');
    const openModal = (e) => {
      this.createComment(e.target.id);
      popUp.classList.add('active');
      shadow.classList.add('active');
      const { parentElement } = e.target;
      if (parentElement.id === e.target.id) {
        const firstChild = parentElement.firstElementChild;
        const secondChild = parentElement.firstElementChild.nextElementSibling;
        const formId = firstChild.nextElementSibling.firstElementChild.innerHTML;
        const popUpId = firstChild.firstElementChild.alt;
        form.setAttribute('id', formId);
        popUp.setAttribute('id', popUpId);
        popTop.innerHTML = `
          <img class="top-img" src="${firstChild.firstElementChild.src}">
        `;
        popTitle.innerHTML = `${secondChild.firstElementChild.innerHTML}`;
        desc1.innerHTML = `Power: ${e.target.previousElementSibling.id}`;
        desc2.innerHTML = `Collected: ${secondChild.children[1].id}`;
      }
    };
    const closeModal = () => {
      popUp.classList.remove('active');
      shadow.classList.remove('active');
    };
    commentButtons.forEach((button) => {
      button.addEventListener('click', openModal);
    });
    const closeButtons = document.querySelectorAll('.close-pop');
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', closeModal);
    });
  };

  static createComment = (pokeid) => {
    Comments.fetchComment(pokeid).then((data) => {
      const commentsDiv = document.querySelector('.comments-list');
      commentsDiv.innerHTML = '';
      dispComment.innerHTML = '';
      data.forEach((comment) => {
        dispComment.innerHTML = `Comments (${Comments.countFn(data)})`;
        const li = document.createElement('li');
        li.textContent = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
        commentsDiv.appendChild(li);
      });
    });
  };
}
