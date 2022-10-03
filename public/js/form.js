var registrationForm = document.getElementById("registration-form");

registrationForm.onsubmit = (e) => {
  e.preventDefault();

  document.getElementById("pay-btn").innerHTML = '<div class="loader"></div>';

  var personName = document.getElementById("personName").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var age = document.getElementById("age").value;
  var state = document.getElementById("state").value;
  var fundraisingHistory = document.getElementById("fundraising-history").value;
  var businessIdea = document.getElementById("business-idea").value;

  const data = {
    name: personName,
    email: email,
    contact: contact,
    age: age,
    state: state,
    fundraisingHistory: fundraisingHistory,
    businessIdea: businessIdea,
  };

  const idGen = (length) => {
    var id = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  };

  const customerID = idGen(12);
  const customerPhone = contact;
  const amt = 500;
  var orderToken = null;

  const order = {
    id: idGen(12),
    currency: "INR",
    amount: amt,
    customer_id: customerID,
    customer_phone: customerPhone,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const getToken = async () => {
    console.log("Fetching...");
    const res = await axios
      .post("https://reverrserver.herokuapp.com/webcftoken", order, {
        headers: headers,
      })
      .then((res) => {
        loading = false;
        orderToken = res.data.token;
        sessionStorage.setItem("orderToken", orderToken);
        console.log(orderToken);
        window.location = "/payment";
        document.getElementById("pay-btn").innerHTML = "Pay";
      })
      .catch((err) => {
        loading = false;
        console.log(err);
        document.getElementById("pay-btn").innerHTML = "Pay";
      });
  };

  getToken();
};
