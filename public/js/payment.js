const cashfree = new Cashfree();

const orderToken = sessionStorage.getItem("orderToken");
const dropConfig = {
  components: [
    "order-details",
    "card",
    "netbanking",
    "app",
    "upi",
    "paylater",
    "credicardemi",
    "cardlessemi",
  ],
  orderToken: orderToken,

  onSuccess: async (data) => {
    console.log("Success");
  },
  onFailure: async (data) => {
    console.log("Failed");
  },
  style: {
    backgroundColor: "#ffffff",
    color: "#11385b",
    fontFamily: "Lato",
    fontSize: "14px",
    errorColor: "#ff0000",
    theme: "light",
  },
};

const payButtonClickHandler = () => {
  let paymentDOM = document.getElementById("drop_in_container");
  paymentDOM.innerHTML = "";
  cashfree.initialiseDropin(paymentDOM, dropConfig);
};

if (orderToken) {
  payButtonClickHandler();
}
