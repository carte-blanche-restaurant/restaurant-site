document.querySelector(".order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const service = document.querySelector("#service").value;
  const name = this.querySelector("input[type='text']").value;

  if (service === "livraison") {
    alert(`Merci ${name} ! Votre commande sera livrée à votre adresse sous peu 🚗`);
  } else if (service === "emporter") {
    alert(`Merci ${name} ! Votre commande sera prête à être récupérée au restaurant 🥡`);
  } else {
    alert("Merci pour votre commande !");
  }

  this.reset();
});
