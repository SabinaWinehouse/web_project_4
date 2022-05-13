const editContainer = document.getElementById("editForm");
document.getElementById("editButton").addEventListener("click", function () {
  document.querySelector(".edit_hidden").classList.add("edit");
});
document.getElementById("closeButton").addEventListener("click", function () {
  document.querySelector(".edit_hidden").classList.remove("edit");
});

let formElement = document.querySelector(".edit__form");
console.log(formElement);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector(".edit__form-name");
  let jobInput = document.querySelector(".edit__form-subtitle");

  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  let nameField = document.querySelector(".profile__name");
  let jobField = document.querySelector(".profile__subtitle");

  document.querySelector(".profile__name").textContent = nameInputValue;
  document.querySelector(".profile__subtitle").textContent = jobInputValue;
  console.log(nameField.textContent);
}

formElement.addEventListener("click", handleProfileFormSubmit);
