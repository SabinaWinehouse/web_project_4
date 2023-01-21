import './index.css'
import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import {initialCards} from "../utils/contstans.js";
import {settings} from "../utils/contstans.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo.js";


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

//functions
function createCard(data) { 
  const card = new Card(data, "#card-template", popupWithImage.open);
  return card.createCard();
 }

//opening and closing ADD-section
buttonAddSectionProfile.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardPopup.open();
  addFormValidator.toggleButtonState();
});


//opening and closing EDIT-sections
buttonEditSectionProfile.addEventListener("click", () => {
  editFormValidator.resetValidation();
  editProfilePopup.open();
  userInfo.prefillForm();
  
});

