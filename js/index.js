
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');

}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}




var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



 var newsform= document.getElementById('new')
var newsinput= document.getElementById('name')
var newsinput1= document.getElementById('email')
var newsinput2= document.getElementById('number')
newsform.addEventListener('submit',function(e){
e.preventDefault()
localStorage.setItem('name',newsinput.value)
console.log(newsinput.value)
newsinput.value=""
localStorage.setItem('email',newsinput1.value)
newsinput1.value=""
localStorage.setItem('number',newsinput2.value)
newsinput2.value=""
alert("thank you")

})



