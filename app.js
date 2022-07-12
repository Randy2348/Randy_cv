const form = document.getElementById("form");

// form.addEventListener("submit", () =>
//   emailjs
//     .sendForm("RandomXD", "portfolioTemplate", form, "nbmF2JUCXWMf0Za2n")
//     .then(
//       function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("¡GRACIAS, TU MENSAJE FUE ENVIADO!");
//       },
//       function (error) {
//         console.log("FAILED...", error);
//         alert("HUBO UN ERROS AL ENVIAR TU MENSAJE");
//       }
//     )
// );
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "RandomXD",
      "portfolioTemplate",
      form.current,
      "nbmF2JUCXWMf0Za2n"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("¡GRACIAS, TU MENSAJE FUE ENVIADO!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("HUBO UN ERROS AL ENVIAR TU MENSAJE");
      }
    );
};
