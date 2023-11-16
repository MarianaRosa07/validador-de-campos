import validator from 'validator';

const textField = document.querySelector('#value');
const selection = document.querySelector('#option');
const button = document.querySelector('#button');
const outputText = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    cpf: validator.isTaxID(textField.value, 'pt-BR'),
    hexColor: validator.isHexColor(textField.value),
    email: validator.isEmail(textField.value),
    uuid: validator.isUUID(textField.value, UUID_VERSION),
    url: validator.isURL(textField.value),
  };
  outputText.innerHTML = `A validação retornou ${fields[selection.value]}`;
});
