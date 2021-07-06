//MÁSCARA
$(document).ready(function () { 
  var $seuCampoPhone = $("#phone");
  $seuCampoPhone.mask('00 00000-0000', {reverse: true});
});


//SLIDES
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//VALIDAÇÃO FORM
function validar(){
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");
  if (name.value == "") {
    alert("Digite seu nome")
    name.focus();
  }
  if (email.value == "") {
    alert("Digite um e-mail válido")
    email.focus();
  }
  if (phone.value == "") {
    alert("Digite um número de telefone")
    phone.focus();
  }
  if (phone.length != "11") {
    alert("Digite um número de telefone válido")
    phone.focus();
  }
  if (message.value == "") {
    alert("Digite sua mensagem")
    message.focus();
  }
}

	
