const btnTheme = document.getElementById('theme-button');
const body = document.querySelector('body');


btnTheme.addEventListener('click', function(){
  body.classList.toggle('darkmode');
})