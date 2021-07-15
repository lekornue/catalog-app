export function inputFocus({ target }) {
    let error = document.getElementById("error");
    if (target.classList.contains("invalid")) {
      target.classList.remove("invalid");
      error.innerHTML = "";
    }
  }