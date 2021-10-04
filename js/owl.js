$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }}
  });
});

function disAlert(){
        alert("your info has been submitted.");
}
