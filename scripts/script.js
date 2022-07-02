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
const cardTemplate = document.querySelector("#card-template").content;
const editSectionEdit = document.querySelector(".edit");
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
const addSectionAdd = document.querySelector(".add");
const buttonAddOpen = document.querySelector(".profile__button-add");
const buttonAddClose = document.querySelector(".add__button-close");
const submitButtonAddSection = document.querySelector(".add__button");

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
});
function renderCard(card, container) {
  container.prepend(card);
}

function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__picture");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const popup = document.querySelector(".popup");
  const popupCaption = popup.querySelector(".popup__caption");
  cardImage.src = data.link;
  cardImage.alt = `A beautiful scene in ${data.name}`;
  cardTitleElement.textContent = data.name;
  popupCaption.textContent = data.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  function callImagePopUp() {
    const popupSectionPopup = document.querySelector(".popup");
    const imagePopup = document.querySelector(".popup__image");
    const cardImages = document.querySelectorAll(".card__picture");
    const popupCloseButton = document.querySelector(".popup__button-close");

    let URL;
    let caption;

    cardImages.forEach((image) => {
      image.addEventListener("click", (e) => {
        URL = e.target.src;
        imagePopup.src = URL;

        caption = e.target.alt;
        imagePopup.alt = URL;

        console.log(imagePopup.alt);
        console.log(imagePopup.src);
        popupSectionPopup.classList.toggle("popup_open");
      });

      popupCloseButton.addEventListener("click", () => {
        popupSectionPopup.classList.remove("popup_open");
      });
    });
  }
  callImagePopUp();
  return cardElement;
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
  closeAddSection();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closeEditSection();
}

///////eventListeners////
buttonEditAdd.addEventListener("click", () => {
  openPopup(editSectionEdit);
});

buttonEditClose.addEventListener("click", closeEditSection);
formElement.addEventListener("submit", handleProfileFormSubmit);

buttonAddClose.addEventListener("click", closeAddSection);
buttonAddOpen.addEventListener("click", openAddSection);

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleAddCardForm();
});
////////////closing-opening-popups////////////
function closeAddSection() {
  addSectionAdd.classList.remove("add_open");
}

function openAddSection() {
  addSectionAdd.classList.add("add_open");
}
function openEditSection() {
  editSectionEdit.classList.add("edit_open");
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function closeEditSection() {
  editSectionEdit.classList.remove("edit_open");
}
function openPopup(popup) {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  popup.classList.add("edit_open");
}
