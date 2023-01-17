import './pages/index.css'
import FormValidator from "./scripts/FormValidator.js";
import { Card } from "./scripts/Card.js";
import {initialCards} from "./scripts/contstans.js";
import {settings} from "./scripts/contstans.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage";
import PopupWithForm from "./scripts/PopupWithForm";
import UserInfo from "./scripts/UserInfo.js";


//forms
const editProfileForm = document.querySelector("#editProfileForm");
const createCardForm = document.querySelector("#createCardForm");
const editProfilePopup = new PopupWithForm("#editProfileForm", "#popup__section-edit", {
  handleSubmit: (info) => {
    userInfo.setUserInfo(info);
    editProfilePopup.close();
  }
});
const popupWithImage = new PopupWithImage('#popup__image-section');
const addCardPopup = new PopupWithForm("#createCardForm", "#popup__section-add", {
  handleSubmit:(item)=>{
    const newCard = createCard(item);
    section.addItem(newCard)
    addCardPopup.close();
  }});
const userInfo = new UserInfo(".profile__name", ".profile__subtitle");
const section = new Section({
  items: initialCards,
  renderer: (card) => {
    const newCard = createCard(card);
    section.addItem(newCard);
  }},
 ".gallery__list"
);
const editFormValidator = new FormValidator(settings, editProfileForm);
const addFormValidator = new FormValidator(settings, createCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

section.renderItems();

//buttons
const buttonEditSectionProfile = document.querySelector(
  ".profile__button-edit"
);
const buttonAddSectionProfile = document.querySelector(".profile__button-add");
//const cardTemplateSelector = ;


//functions
function createCard(data) { 
  const card = new Card(data, "#card-template", popupWithImage.open);
  return card.createCard();
 }

//opening and closing ADD-section
buttonAddSectionProfile.addEventListener("click", () => {
  addCardPopup.open();
});


//opening and closing EDIT-sections
buttonEditSectionProfile.addEventListener("click", () => {
  editFormValidator.resetValidation();
  editProfilePopup.open();
  userInfo.prefillForm();
  
});

