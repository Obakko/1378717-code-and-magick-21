'use strict';
const NAME_WIZARD = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAME_WIZARD = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
const userDialog = document.querySelector(`.setup`);
const NUMBER_WIZARDS = 4;

const getRandomValueArray = (valueArray) => {
  return valueArray[Math.floor(Math.random() * valueArray.length)];
};
const getArrayWizards = () => {
  const arrayWizards = [];
  for (let i = 0; i < NUMBER_WIZARDS; i++) {
    arrayWizards.push({
      name: getRandomValueArray(NAME_WIZARD) + ` ` + getRandomValueArray(SURNAME_WIZARD),
      coatColor: getRandomValueArray(COAT_COLOR),
      eyesColor: getRandomValueArray(EYES_COLOR)
    });
  }
  return arrayWizards;
};
const wizards = getArrayWizards();

userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
