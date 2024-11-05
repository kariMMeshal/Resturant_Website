const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.Login-link');
const RegisterLink = document.querySelector('.register-link');

RegisterLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});



iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});


