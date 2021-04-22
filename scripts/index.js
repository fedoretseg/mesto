let openPopupEditbutton = document.querySelector(".profile__editbutton");
let popup = document.querySelector(".popup");
let closePopupEditbutton = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let jobInput = document.querySelector(".popup__form_job-input");
let nameInput = document.querySelector(".popup__form_name-input");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

function togglePopupEditbutton(evt) {
    evt.preventDefault();
    popup.classList.toggle("popup_opened");
}

openPopupEditbutton.addEventListener("click", togglePopupEditbutton);

closePopupEditbutton.addEventListener("click", togglePopupEditbutton);

popup.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
        togglePopupEditbutton(evt);
    }
});

function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = `${nameInput.value}`;
    profileProfession.textContent = `${jobInput.value}`;
}

formElement.addEventListener("submit", togglePopupEditbutton);
formElement.addEventListener("submit", editProfile);






