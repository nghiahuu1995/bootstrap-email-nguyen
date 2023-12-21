// var myCarousel = document.querySelector('#carouselExampleInterval');
// var carousel = new bootstrap.Carousel(myCarousel);

var bdContainer = document.querySelector('.body-container');


var ToggleBtn = document.querySelector('.mode-toggle');
var navBar = document.querySelector('.navbar');
var cards = document.querySelectorAll('.card');
const exampleModal = document.getElementById('exampleModal')
ToggleBtn.addEventListener('click', () => {
    if(!bdContainer.classList.contains('dark-mode')) {
        ToggleBtn.innerHTML = `<i class="fa-solid fa-moon fa-lg fa-flip"></i>`;
        
    }
    else {
        ToggleBtn.innerHTML = `<i class="fa-regular fa-sun fa-spin fa-lg"></i>`;
    }
    bdContainer.classList.toggle('dark-mode');
    
    
    cards.forEach(card => {
      card.classList.toggle('dark-mode')
    })
    navBar.classList.toggle('nav-bar-dark');
    
})


// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }