const nameInput = document.querySelector(".edit__form-name");
const jobInput = document.querySelector(".edit__form-subtitle");

const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__subtitle");

const buttonEditAdd = document.querySelector(".profile__button-edit");

function buttonEditOpen() {
  document.querySelector(".edit_hidden").classList.add("edit");
}

buttonEditAdd.addEventListener("click", buttonEditOpen);

const buttonEditRemove = document.querySelector(".edit__button-close");

function buttonEditClose() {
  document.querySelector(".edit_hidden").classList.remove("edit");
}

buttonEditRemove.addEventListener("click", buttonEditClose);

const formElement = document.querySelector(".edit__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
}
const saveButton = document.querySelector(".edit__button");

function saveButtonCLose() {
  document.querySelector(".edit_hidden").classList.remove("edit");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
saveButton.addEventListener("click", saveButtonCLose);
