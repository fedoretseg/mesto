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
const openPopupEditbutton = document.querySelector('.profile__editbutton');
const popupEdit = document.querySelector('.popup_edit_profile');
const closePopupEditbutton = document.querySelector('.popup__close_profile');
const formElement = document.querySelector('.popup__form_edit_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//popup card
const openPopupAddbutton = document.querySelector('.profile__addbutton');
const popupAdd = document.querySelector('.popup_add_card');
const closePopupAddbutton = document.querySelector('.popup__close_card');
const formCard = document.querySelector('.popup__form_add_card');
const placeInput = document.querySelector('.popup__input_type_place');
const imgInput = document.querySelector('.popup__input_type_img');
const buttonSave = document.querySelector('.popup__input-submit');
const tasksContainer = document.querySelector('.cards');
const taskTemplate = document.querySelector('#task-template');


//открываем popup profile
function openPopupEdit() {
    popupEdit.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

//закрываем popup profile на крестик 
function closePopupEdit() {
    popupEdit.classList.remove('popup_opened');
}


//закрываем popup profile с сохранением измененных данных
function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopupEdit();
}

//создаем карточку через popup card
function createCard(cardItem){
	const newItem = taskTemplate.content.querySelector('.card').cloneNode(true);
	newItem.querySelector('.card__place').textContent = cardItem.name;
	newItem.querySelector('.card__element').src = cardItem.link;
	const cardRemoveButton = newItem.querySelector('.card__trash');
	cardRemoveButton.addEventListener('click', function(evt){
		evt.target.closest('.card').remove();
	});

	return newItem;
};

//создаем default cards
initialCards.forEach(function(currentItem) {
	const newCard = createCard(currentItem);
	tasksContainer.append(newCard);
});

//открываем popup card
function openPopupAdd() {
    popupAdd.classList.toggle('popup_opened');
}

//закрываем popup card на крестик 
function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

//закрываем popup card с сохранением измененных данных
//удаляем card click trash
function addProfile(evt) {
    evt.preventDefault();
    const newItem = taskTemplate.content.querySelector('.card').cloneNode(true);
	newItem.querySelector('.card__place').textContent = placeInput.value;
	newItem.querySelector('.card__element').src = imgInput.value;
	const cardRemoveButton = newItem.querySelector('.card__trash');
	cardRemoveButton.addEventListener('click', function(evt){
		evt.target.closest('.card').remove();
	});
	tasksContainer.prepend(newItem);
    closePopupAdd();
}

//отрабатываем действия popup profile
openPopupEditbutton.addEventListener('click', openPopupEdit);
closePopupEditbutton.addEventListener('click', closePopupEdit);
formElement.addEventListener('submit', editProfile);

//отрабатываем действия popup card
openPopupAddbutton.addEventListener('click', openPopupAdd);
closePopupAddbutton.addEventListener('click', closePopupAdd);
formCard.addEventListener('submit', addProfile);
