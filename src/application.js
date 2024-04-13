import axios from 'axios';

const app = () => {
  // 1 задача ************************************
  const formContainer = document.querySelector('.form-container');

  const formHtml = `<form id="registrationForm">
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
    </div>
    <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
    </div>
    <input type="submit" value="Submit" class="btn btn-primary">
</form>`;

  formContainer.innerHTML = formHtml;

  // 1 задача ************************************

  // 2 задача ************************************
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/users', formContainer.values)
      .then((response) => {
        document.body.innerHTML = `<p>${response.data.message}</p>`;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // 2 задача ************************************

  // 3 задача ************************************

  const nameInput = document.getElementById('inputName');
  const emailInput = document.getElementById('inputEmail');

  const isValidName = (name) => name.trim().length > 0;
  const isValidEmail = (email) => /\w+@\w+/.test(email.trim());

  const validateInputs = () => {
    const name = nameInput.value;
    const email = emailInput.value;
    // 4 задача ********************************

    const subbutton = document.querySelector('input[type="submit"]');

    // 4 задача ********************************

    // Валидация имени
    if (isValidName(name)) {
      nameInput.classList.add('is-valid');
      nameInput.classList.remove('is-invalid');
    } else {
      nameInput.classList.add('is-invalid');
      nameInput.classList.remove('is-valid');
    }

    // Валидация email
    if (isValidEmail(email)) {
      emailInput.classList.add('is-valid');
      emailInput.classList.remove('is-invalid');
    } else {
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
    }

    // 4 задача ********************************
    // изменение статуса кнопки submit
    if (isValidName(name) && isValidEmail(email)) {
      subbutton.disabled = false;
    } else {
      subbutton.disabled = true;
    }

  // 4 задача ********************************
  };

  // Добавление обработчиков событий на инпуты
  nameInput.addEventListener('input', validateInputs);
  emailInput.addEventListener('input', validateInputs);
  // 3 задача ************************************
};

export default app;
