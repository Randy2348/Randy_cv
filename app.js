const form = document.getElementById("form");

form.addEventListener("submit", () =>
  emailjs
    .sendForm("RandomXD", "portfolioTemplate", form, "nbmF2JUCXWMf0Za2n")
    .then(
      function (response) {
        alert("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("FAILED...", error);
      }
    )
);
