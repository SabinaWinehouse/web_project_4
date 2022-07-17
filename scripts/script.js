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

//sections
const galleryList = document.querySelector(".gallery__list");
const popupEachSection = document.querySelector(".popup");
const popupImageCard = document.querySelector("#popup__image-section");
const popupEditSection = document.querySelector("#popup__section-edit");
const popupAddSection = document.querySelector("#popup__section-add");

//inputs
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-subtitle");
const placeInputName = document.querySelector(".popup__form-title");
const placeInputLink = document.querySelector(".popup__form-link");

//buttons
const buttonEditSectionProfile = document.querySelector(
  ".profile__button-edit"
);

const buttonAddSectionProfile = document.querySelector(".profile__button-add");
const toCreateCardButton = document.querySelector(".popup__create-card");
const toEditProfileButton = document.querySelector(".popup__edit-profile");
const cardImagePopupSectionCloseButton = document.querySelector(
  ".popup__button-close-image"
);
const editPopupSectionCloseButton = document.querySelector(
  "#editPopupSectionCloseButton"
);
const addPopupSectionCloseButton = document.querySelector(
  "#addPopupSectionCloseButton"
);
//forms
const editProfileForm = document.querySelector("#editProfileForm");
const createCardForm = document.querySelector("#createCardForm");

//functions

function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const popupImageCard = document.querySelector("#popup__image-section");
  const cardImage = cardElement.querySelector(".card__picture");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const popupCaption = popupImageCard.querySelector(".popup__caption");
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

  const openCardPreview = () => {
    const image = document.querySelector(".popup__image");
    image.src = data.link;
    image.alt = `A beautiful scene in ${data.name}`;

    openPopup(popupImageCard);
  };

  cardImage.addEventListener("click", openCardPreview);
  return cardElement;
}

function handlePopupCardForm() {
  const link = placeInputLink.value;
  const name = placeInputName.value;

  const card = {
    name: name,
    link: link,
  };

  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
  closePopup(popupAddSection);
}
//

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closePopup(popupEditSection);
}
function openPopup(popup) {
  popup.classList.add("popup_open");
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
});

function renderCard(card, container) {
  container.prepend(card);
}

//event-listeners
cardImagePopupSectionCloseButton.addEventListener("click", () => {
  closePopup(popupImageCard);
});
//opening and closing ADD-section
buttonAddSectionProfile.addEventListener("click", () => {
  openPopup(popupAddSection);
});
toCreateCardButton.addEventListener("click", (event) => {
  event.preventDefault();
  handlePopupCardForm();
  closePopup(popupAddSection);
});
addPopupSectionCloseButton.addEventListener("click", () => {
  closePopup(popupAddSection);
});

//opening and closing EDIT-section
toEditProfileButton.addEventListener("click", handleProfileFormSubmit);
buttonEditSectionProfile.addEventListener("click", () => {
  openPopup(popupEditSection);
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
});

editPopupSectionCloseButton.addEventListener("click", () => {
  closePopup(popupEditSection);
});
