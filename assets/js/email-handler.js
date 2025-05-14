(function () {
    emailjs.init({
      publicKey: "euM6IQhj85hbUh5sP",
    });
  })();
  
  window.onload = function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const botField = form.querySelector('input[name="bot_check"]');
      if (botField.value) {
        console.log("Spam bot detected — submission ignored.");
        return;
      }
  
      emailjs
        .sendForm("service_4lyam2r", "template_g40rp3h", this)
        .then(() => alert("Message sent!"))
        .catch((err) => alert("Failed to send: " + err));
    });
  };