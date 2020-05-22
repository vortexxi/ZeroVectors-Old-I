$(document).ready(function () {
  		
			var slide3 = $('.intro3');
			TweenLite.from(slide3, 1, {opacity : 0,  delay:1.5,  ease:Elastic.easeOut.config( 1, 0.3), x: 300});
			var slide1 = $('.intro1');
			TweenLite.from(slide1, 1, {opacity : 0,  delay:1,  ease:Elastic.easeOut.config( 1, 0.3), x: -300});
			var slide2 = $('.intro2');
			TweenLite.from( slide2, 1.3, {opacity : 1, ease:Back.easeInOut.config( 1.7),y: -500});
});