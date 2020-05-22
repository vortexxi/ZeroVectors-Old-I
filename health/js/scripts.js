$(document).ready(function() {
    	//vegas
	
	$("#debut, header").vegas({
    slides: [
		{ src: "img/yosemite_op.jpg" },
        { src: "img/bienEtre.jpg" },
        { src: "img/people_op.jpg" }
    ],
	animation: 'kenburnsUp',
	timer: false,
	delay: 5000,
});
	
	$(".histDiv").vegas({
	slides: [
		{ src: "img/coach-de-vie1.jpg"},
		{ src: "img/coach-de-vida.jpg", transition: 'slideRight2'},
		{ src: "img/life-coach.jpg", transition: 'slideDown2'},
		{ src: "img/coach-de-vie2.jpg", transition: 'slideLeft2'}
	],
	
	timer: false,
	delay: 5000		
});

//CAROUSEL
	
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }  

	});
	
	$(".navBtn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // animate() method  add smooth page scroll
      //(800)milliseconds
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
	


  });
  
});