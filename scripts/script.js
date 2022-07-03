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

//declared variables
//gets inside of the content
const cardTemplate = document.querySelector("#card-template").content;
// inputs of a name and a job for edit section on a main screen!!!
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__subtitle");
// button with a image og pen on it
const buttonEditAdd = document.querySelector(".profile__button-edit");
// the empty ul file of a cards list
const galleryList = document.querySelector(".gallery__list");
// the button with the image of plus
const buttonAddOpen = document.querySelector(".profile__button-add");
//id's of sections add and edit from a main screen
const profileSectionEdit = document.querySelector("#profile__section-edit");
const profileSectionAdd = document.querySelector("#profile__section-add");
//variable of every popup that you have on a page
const popupSection = document.querySelector(".popup");
//the close-butthon but just for images

const buttonClosePopupImage = document.querySelector(
  ".popup__button-close-image"
);
//the button that closing popup and edit sections
const buttonPopupClose = document.querySelector(".popup__button-close");

//the inputs of a popup for edit section
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-subtitle");
//popup form for both sections 'add' and 'edit'
const popupCardForm = document.querySelector(".popup__form");
//inputs of an 'add' section on a popup screen
const placeInputName = document.querySelector(".popup__form-title");
const placeInputLink = document.querySelector(".popup__form-link");
// save/create button for both of the sections add and edit//spliy it for two with id(cause the function that they do after 'click' is not the same for both of then)
const submitButtonPopupSection = document.querySelector(".popup__button-save");
//popups of 'edit' and 'add'
const popupEditSection = document.querySelector("#popup__section-edit");
const popupAddsection = document.querySelector("#popup__section-add");
//forms of edit and add sections
const editProfileForm = document.querySelector("#editProfileForm");
const createCardForm = document.querySelector("#createCardForm");

//functions
//only opens add section
function openPopupSection() {
  popupAddsection.classList.add("popup_open");
}
//opens and сравняет значения of an edit section on a popup screen and main screen
function openPopupSectionEdit() {
  popupEditSection.classList.add("popup_open");
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

//closing add section
function closePopupAddSection() {
  popupAddsection.classList.remove("popup_open");
}

//closing every popup on a page that has been opened before
function closePopupSection() {
  popupSection.classList.remove("popup_open");
}

//takes the information from createCard function and creates a new card
initialCards.forEach((card) => {
  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
});
//creates a card on a specific line (because of 'prepend')
function renderCard(card, container) {
  container.prepend(card);
}
//functions that declares everything that connected to a card
function createCard(data) {
  //takes a card as an element and getting inside of the pieces of a caed that we need for creating a card from 'initialCards' list
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  //a title of a card
  const cardTitleElement = cardElement.querySelector(".card__title");
  //like-button of a card
  const likeButton = cardElement.querySelector(".card__like-button");
  //the image itself of a card
  const cardImage = cardElement.querySelector(".card__picture");
  //the delete button of a card
  const deleteButton = cardElement.querySelector(".card__delete-button");
  // the specific popup of a card
  const popupImageSection = document.querySelector("#popup__image-section");
  //the name of a card on a bottom of a popup-image screen
  const popupCaption = popupImageSection.querySelector(".popup__caption");
  //takes the source an a name of a card from data parameter(it's 'data' of a card)
  cardImage.src = data.link;
  cardImage.alt = `A beautiful scene in ${data.name}`;

  //takes the content of a text for a caption of a popup-image and title of a card that is on a main screen and сравняет значения of a card data(name)
  cardTitleElement.textContent = data.name;
  popupCaption.textContent = data.name;

  // function that toggles the like-button to make it black or white after clicking
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  //function that removes a card completly if you clicking on an icon of a specific trash can of a specific card
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  // function that opens and closes a popup-image
  function callImagePopUp() {
    const popupImageCard = document.querySelector("#popup__image-section");
    const imagePopup = document.querySelector(".popup__image");
    const cardImages = document.querySelectorAll(".card__picture");
    const popupCloseButton = document.querySelector(
      ".popup__button-close-image"
    );

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
        popupImageCard.classList.toggle("popup_open");
      });

      popupCloseButton.addEventListener("click", () => {
        popupImageCard.classList.remove("popup_open");
      });
    });
  }
  callImagePopUp();
  return cardElement;
}
//function that connecting the inputs of an 'add' section and creating a card with those values
function handlePopupCardForm() {
  const link = placeInputLink.value;
  const name = placeInputName.value;

  const card = {
    name: name,
    link: link,
  };

  const cardElement = createCard(card);
  renderCard(cardElement, galleryList);
  closePopupAddSection();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closePopupSection();
}

//eventListeners
buttonEditAdd.addEventListener("click", () => {
  openPopupSectionEdit(popupSection);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

buttonPopupClose.addEventListener("click", closePopupSection);
buttonAddOpen.addEventListener("click", openPopupSection);
createCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handlePopupCardForm();
});
