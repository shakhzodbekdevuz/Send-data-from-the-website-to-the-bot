var telegram_bot_id = "5016499264:AAFfqhtoQUDzmGv46OusjcjU74xQCPOO7d0";
//chat id
var chat_id = -476744895;
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  phone=document.getElementById("phone").value;
  message = "Ism, Familiya: " + u_name+ "\nTelefon: " +phone + "\nUsername: " + email + "\nXabar: " + message+ "\nCreator: " +'Shahzodbek';
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
    
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    window.location.reload();
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  return false;
};

