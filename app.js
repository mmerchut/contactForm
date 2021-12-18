
const btn = document.querySelector('.button__purple');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('.phone');

const checkForm = function() {

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var email = /\S+@\S+\.\S+/;
    if(nameInput.value.match(letters))
      {
          console.log('correct name')
       
      }
    else
      {
      alert("Name contains numbers or is empty");
      }
      if(emailInput.value.match(email))
      {
         console.log('correct email')
       
      }
    else
      {
      alert("Incorrect e-mail");
      }
      if(phoneInput.value.match(numbers))
      {
          console.log('correct phone')
       
      }
    else
      {
      alert("Phone nubmer contains letters or is empty");
      }
      
    

}


btn.addEventListener('click', checkForm)
