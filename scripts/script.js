const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
const edit = document.querySelector(".edit");
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__subtitle");
const buttonEditAdd = document.querySelector(".profile__button-edit");
const buttonEditClose = document.querySelector(".edit__button-close");
const nameInput = document.querySelector(".edit__form-name");
const jobInput = document.querySelector(".edit__form-subtitle");
const formElement = document.querySelector(".edit__form");
const galleryList = document.querySelector(".gallery__list");
const addCardForm = document.querySelector(".add__form");
const placeInputName = document.querySelector(".add__form-title");
const placeInputLink = document.querySelector(".add__form-link");
const addImageModal = document.querySelector(".popup");
const imageCloseButton = document.querySelector(".popup__button-close");
const imagePopup = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");

console.log(placeInputName);
console.log(placeInputLink);

function renderCard(card, container) {
  container.prepend(card);
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
});

function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__picture");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = data.link;
  cardImage.alt = `A beautiful scene in ${data.name}`;
  cardTitleElement.textContent = data.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    cardImage.classList.toggle("popup");
    cardImage.src = data.link;
    cardImage.textContent = data.name;
  });

  return cardElement;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  CloseEditSection();
}

const add = document.querySelector(".add");
const buttonAddOpen = document.querySelector(".profile__button-add");
const buttonAddClose = document.querySelector(".add__button-close");

function closeAddSection() {
  add.classList.remove("add_open");
}

function openAddSection() {
  add.classList.add("add_open");
}

function OpenEditSection() {
  edit.classList.add("edit_open");
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function CloseEditSection() {
  edit.classList.remove("edit_open");
}

function openPopup(popup) {
  popup.classList.add("edit_open");
}

function handleAddCardForm() {
  const link = placeInputLink.value;
  const name = placeInputName.value;

  const card = {
    name: name,
    link: link,
  };

  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
}

buttonEditAdd.addEventListener("click", () => {
  openPopup(edit);
});
buttonEditClose.addEventListener("click", CloseEditSection);
formElement.addEventListener("submit", handleProfileFormSubmit);

buttonAddClose.addEventListener("click", closeAddSection);
buttonAddOpen.addEventListener("click", openAddSection);

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleAddCardForm();
});
