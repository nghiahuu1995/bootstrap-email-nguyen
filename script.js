// var myCarousel = document.querySelector('#carouselExampleInterval');
// var carousel = new bootstrap.Carousel(myCarousel);

var bdContainer = document.querySelector('.body-container');
var ToggleBtn = document.querySelector('.mode-toggle');
var navBar = document.querySelector('.navbar');

ToggleBtn.addEventListener('click', () => {
    if(!bdContainer.classList.contains('dark-mode')) {
        ToggleBtn.innerHTML = `<i class="fa-solid fa-moon fa-lg fa-flip"></i>`;
        
    }
    else {
        ToggleBtn.innerHTML = `<i class="fa-regular fa-sun fa-spin fa-lg"></i>`;
    }
    bdContainer.classList.toggle('dark-mode');
    navBar.classList.toggle('nav-bar-dark');
    
})
