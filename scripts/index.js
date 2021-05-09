const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://fedoretseg.github.io/mesto/images/karachaevsk.png'
  },
  {
    name: 'Эльбрус',
    link: 'https://fedoretseg.github.io/mesto/images/elbrus.png'
  },
  {
    name: 'Домбай',
    link: 'https://fedoretseg.github.io/mesto/images/dombay.png'
  },
  {
    name: 'Камчатка',
    link: 'https://fedoretseg.github.io/mesto/images/kamchatka.png'
  },
  {
    name: 'Саяны',
    link: 'https://fedoretseg.github.io/mesto/images/sayany.png'
  },
  {
    name: 'Бухта Песчанная о.Байкал',
    link: 'https://fedoretseg.github.io/mesto/images/baikal.png'
  }
]; 


//popup profile
const openPopupEditButton = document.querySelector('.profile__editbutton');
const popupEdit = document.querySelector('.popup_edit_profile');
const сontainerEdit = popupEdit.querySelector('.popup__container');
const popupFormEditProfile = сontainerEdit.querySelector('.popup__form_edit_profile');
const closePopupEditButton = сontainerEdit.querySelector('.popup__close_profile');
const profileProfession = document.querySelector('.profile__profession');
const profileName = document.querySelector('.profile__name');
const nameInput = popupFormEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupFormEditProfile.querySelector('.popup__input_type_job');

//popup card
const сontainerСard = document.querySelector('.cards');
const openPopupAddButton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popup_add_card');
const сontainerAdd = popupAdd.querySelector('.popup__container');
const popupFormAddCard = сontainerAdd.querySelector('.popup__form_add_card');
const closePopupAddButton = сontainerAdd.querySelector('.popup__close_card');
const taskTemplate = document.querySelector('#task-template');
const taskCard = taskTemplate.content.querySelector('.card');
const placeInput = document.querySelector('.popup__input_type_place');
const imgInput = document.querySelector('.popup__input_type_img');

//popup img
const popupImg = document.querySelector('.popup_with_img');
const сontainerImg = document.querySelector('.popup__container-img');
const popupFormWithImg = сontainerImg.querySelector('.popup__form_with_img');
const closePopupImgButton = сontainerImg.querySelector('.popup__close_img');
const popupFormImg = popupFormWithImg.querySelector('.popup__form_img');
const popupFormText = popupFormWithImg.querySelector('.popup__form_text');


//opened & close popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};


//закрываем popup profile с сохранением измененных данных
function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup(popupEdit);
};

//создаем шаблон карточки через popup card & like heart & trash & open big img
function createCard(newItemElement, newItemPlace) {
    const newItem = taskCard.cloneNode(true);
    const cardElement = newItem.querySelector('.card__element');
    const cardPlace = newItem.querySelector('.card__place');

    cardElement.src = newItemElement;
    cardElement.alt = newItemPlace;
    cardPlace.textContent = newItemPlace;

    newItem.querySelector('.card__heart').addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__heart_active');
    });

    const cardRemoveButton = newItem.querySelector('.card__trash')
    cardRemoveButton.addEventListener('click', function(evt){
		evt.target.closest('.card').remove();
    });

    clickOpenBigImg(newItem);

    return newItem;
};

//создаём new card
function clickAddNewFormCard(evt) {
    evt.preventDefault();
    const newCard = createCard(imgInput.value, placeInput.value);
    addCard(newCard);
    closePopup(popupAdd);
};

//создаем default cards ставим по порядку
initialCards.forEach(function(element) {
    const newCard = createCard(element.link, element.name);
    сontainerСard.append(newCard);
});

//добавляем new card в начало
function addCard(card) {
    сontainerСard.prepend(card);
};

//открываем Big Img
function clickOpenBigImg(taskCard) {
	const cardElement = taskCard.querySelector('.card__element');
    const cardTitle = taskCard.querySelector('.card__place');

    cardElement.addEventListener('click', function() {
    popupFormImg.src = cardElement.src;
    popupFormImg.textContent = cardTitle.alt;
    popupFormText.textContent = cardTitle.textContent;
    openPopup(popupImg);
    });
};




//отрабатываем действия popup profile
openPopupEditButton.addEventListener('click', function() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
});

closePopupEditButton.addEventListener('click', function() { 
	closePopup(popupEdit); 
});

popupFormEditProfile.addEventListener('submit', editProfile);


//отрабатываем действия popup card
openPopupAddButton.addEventListener('click', function() { 
	openPopup(popupAdd); 
	popupFormAddCard.reset();
});

closePopupAddButton.addEventListener('click', function() {
    closePopup(popupAdd);
    popupFormAddCard.reset();
});

popupFormAddCard.addEventListener('submit', clickAddNewFormCard);


//отрабатываем действия popup img
closePopupImgButton.addEventListener('click', function() { 
	closePopup(popupImg); 
});