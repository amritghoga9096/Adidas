const popupOverlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("okBtn");

function openPopup() {
  popupOverlay.style.visibility = "visible";
  popupOverlay.style.opacity = 1;
}

function closePopup() {
  popupOverlay.style.visibility = "hidden";
  popupOverlay.style.opacity = 0;
}

closeBtn.addEventListener("click", closePopup);
okBtn.addEventListener("click", closePopup);

window.onload = openPopup;