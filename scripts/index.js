let openPopupEditbutton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup');
let closePopupEditbutton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

//открываем popup
function openPopup() {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
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
    openPopup();
}

//отрабатываем действия
openPopupEditbutton.addEventListener('click', openPopup);
closePopupEditbutton.addEventListener('click', closePopup);
formElement.addEventListener('submit', editProfile);




