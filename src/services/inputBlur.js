export function inputBlur({ target }) {
  let error = document.getElementById("error");
  switch (target.id) {
    case "name":
      if (target.value === "") {
        error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
      }
      break;
    case "date of birth":
      if (target.value === "") {
        error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
      }
      break;
    case "e-mail":
      if (target.value === "") {
        error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
      } else if (!target.value.includes("@")) {
        target.classList.add("invalid");
        error.innerHTML = `Пожалуйста, введите правильный email.`;
      }
      break;
    case "password":
      if (target.value === "") {
        error.innerHTML = `Пожалуйста, заполните поле ${target.id}.`;
      } else if (target.value.length < 6) {
        target.classList.add("invalid");
        error.innerHTML = `Пожалуйста, введите пароль более 6 символов.`;
      }
      break;
    default:
      alert("Нет таких значений");
  }
}
