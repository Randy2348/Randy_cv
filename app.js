const form = document.getElementById("form");

form.addEventListener("submit", () =>
  emailjs.sendForm("RandomXD", "portfolioTemplate", form).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  )
);

var templateParams = {
  name: "James",
  email: "randy2348.rj@gmail.com",
  message: "Check this out!",
};

// emailjs.send("RandomXD", "portfolioTemplate", templateParams).then(
//   function (response) {
//     console.log("SUCCESS!", response.status, response.text);
//   },
//   function (error) {
//     console.log("FAILED...", error);
//   }
// );
