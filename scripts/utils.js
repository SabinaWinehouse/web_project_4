export function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupByEscape);
  popup.addEventListener("mousedown", closePopupOnRemoteClick);
}

export function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupByEscape);
  popup.removeEventListener("mousedown", closePopupOnRemoteClick);
}

function closePopupByEscape(event) {
  const key = event.key;
  if (key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

function closePopupOnRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}
