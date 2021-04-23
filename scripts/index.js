let openPopupEditbutton = document.querySelector(".profile__editbutton");
let popup = document.querySelector(".popup");
let closePopupEditbutton = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-job");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

//открываем popup
function togglePopupEditbutton(evt) {
    evt.preventDefault();
    popup.classList.toggle("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}
//закрываем popup без изменения данных
// popup.addEventListener("click", function(evt) {
//     if (evt.target === evt.currentTarget) {
//         togglePopupEditbutton(evt);
//     }
// });

//закрываем popup с сохранением измененных данных
function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    togglePopupEditbutton(evt);
}

//отрабатываем действия
openPopupEditbutton.addEventListener("click", togglePopupEditbutton);
closePopupEditbutton.addEventListener("click", togglePopupEditbutton);
formElement.addEventListener("submit", editProfile);






