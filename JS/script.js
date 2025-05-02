const menu = document.getElementById("menu")
const action = document.getElementById("actions")

menu.addEventListener("click", ()=>{
    hundleMenu();
})

function hundleMenu(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}




const showMoreButton = document.getElementById('showMoreButton');
const additionalContent = document.getElementById('additionalContent');

showMoreButton.addEventListener('click', function() {
  if (additionalContent.style.display === 'none') {
    additionalContent.style.display = 'block';
    showMoreButton.textContent = 'More Information ';
  } else {
    additionalContent.style.display = 'none';
    showMoreButton.textContent = ' More Information';
  }
});



