'use strict';

let form = document.forms.signin;
let nameInput =  form.name;
let yearInput =  form.year;

form.addEventListener('submit', userSignin);
let flag = true;
function userSignin(event){
    event.preventDefault();
    flag = true;
    nameError.innerHTML = '';
    yearError.innerHTML = '';

    if(nameInput.classList.contains('error__input')){
        nameInput.classList.remove('error__input');
    }
    if(yearInput.classList.contains('error__input')){
        yearInput.classList.remove('error__input');
    }

    if(!nameInput.value){
        nameInput.classList.add('error__input');
        nameError.innerHTML = 'Введите имя';
        flag = false;
    } else if(nameInput.value.length < 2){
        nameInput.classList.add('error__input');
        nameError.innerHTML = 'Введите не менее 2 символов';
        flag = 'false'
    }
    if(!yearInput.value){
        yearInput.classList.add('error__input');
        yearError.innerHTML = 'Введите год рождения';
        flag = 'false'
    } else if(yearInput.value.length < 4){
        yearInput.classList.add('error__input');
        yearError.innerHTML = 'Введите 4 цифры';
        flag = 'false'
    } else if(yearInput.value.length > 4){
        yearInput.classList.add('error__input');
        yearError.innerHTML = 'Введите 4 цифры';
        flag = 'false'
    } else if(2024 - yearInput.value < 18){
        yearInput.classList.add('error__input');
        yearError.innerHTML = 'Вам нет 18';
        flag = 'false'
    }
    
    if(flag == true){
        user.innerHTML = `Здравствуйте, ${nameInput.value}`;
    }
}