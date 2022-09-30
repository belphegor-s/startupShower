// Modal
// var modal = document.getElementById("signup");
var btn = document.getElementById("signup-btn");
// var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  // modal.style.display = "block";
  window.location = "/form";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Form Data
// var registrationForm = document.getElementById("registration-form");

// registrationForm.onsubmit = (e) => {
//   e.preventDefault();

//   var personName = document.getElementById("personName").value;
//   var email = document.getElementById("email").value;
//   var contact = document.getElementById("contact").value;
//   var age = document.getElementById("age").value;
//   var state = document.getElementById("state").value;
//   var fundraisingHistory = document.getElementById("fundraising-history").value;
//   var businessIdea = document.getElementById("business-idea").value;

//   const data = {
//     name: personName,
//     email: email,
//     contact: contact,
//     age: age,
//     state: state,
//     fundraisingHistory: fundraisingHistory,
//     businessIdea: businessIdea,
//   };

//   console.log(data);
// };
