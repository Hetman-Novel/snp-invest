document.addEventListener('DOMContentLoaded', function () {

   let popup_form = document.querySelector('.popup__form');
   let popup_submit = document.getElementById('demo-submit');
   let popup_submit_ok = document.getElementById('demo-ok');
   let popup_wrap_form = document.querySelector('.popup__wrap-form');
   let popup_after_sending = document.querySelector('.popup__after-sending');

   if (popup_form) {
      popup_submit.addEventListener('click', () => {
         popup_after_sending.classList.remove('hidden');
         popup_wrap_form.classList.add('hidden');
      });
      popup_submit_ok.addEventListener('click', () => {
         setTimeout(() => {
            popup_wrap_form.classList.remove('hidden');
            popup_after_sending.classList.add('hidden');
         }, 300)
      });
   }

});

// Ajax JavaScript
document.querySelector('.popup__form').addEventListener("submit", function(event) {
   event.preventDefault();

   var form = document.querySelector('.popup__form')
   var formData = new FormData(form);

   var xhr = new XMLHttpRequest();
   xhr.open("POST", "investments.html", true); // Укажите URL вашего обработчика на сервере
   xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
               document.getElementById("result").innerHTML = xhr.responseText;
            } else {
               document.getElementById("result").innerHTML = "Произошла ошибка при отправке данных";
            }
      }
   };
   xhr.send(formData);
});