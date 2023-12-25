document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".input input");
  const buttons = document.querySelectorAll(".keybord button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "C") {
        inputField.value = "";
      } else if (buttonText === "=") {
        try {
          inputField.value = eval(inputField.value);
        } catch (error) {
          inputField.value = "Error";
        }
      } else {
        inputField.value += buttonText;
      }
    });
  });
});
