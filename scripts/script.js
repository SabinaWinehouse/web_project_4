const edit = document.querySelector(".edit");
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__subtitle");
const buttonEditAdd = document.querySelector(".profile__button-edit");
const buttonEditClose = document.querySelector(".edit__button-close");
const nameInput = document.querySelector(".edit__form-name");
const jobInput = document.querySelector(".edit__form-subtitle");
const formElement = document.querySelector(".edit__form");

function OpenEditSection() {
  edit.classList.add("edit_open");
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function CloseEditSection() {
  edit.classList.remove("edit_open");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  CloseEditSection();
}

buttonEditAdd.addEventListener("click", OpenEditSection);
buttonEditClose.addEventListener("click", CloseEditSection);
formElement.addEventListener("submit", handleProfileFormSubmit);
