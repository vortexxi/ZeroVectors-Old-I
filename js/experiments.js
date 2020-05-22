$(document).ready(function () {
	
	//$(function () {
  $('[data-toggle="tooltip"]').tooltip()
//});
	$('.animsition-overlay').animsition({
			 inClass: 'overlay-slide-in-right',
			 outClass: 'overlay-slide-out-bottom',
			 overlay : true,
			 overlayClass : 'animsition-overlay-slide',
			 overlayParentElement : 'body'
    		});
	
  $('a[data-class]').click(function () {
    updateNavbarClass($(this).attr('data-class'));
  });
			
	updateNavbarClass('navbar-fixed-left');	
	
	
});
			
	
function updateNavbarClass(className) {
  $('nav')
    .removeClass(function (index, css) {
      return (css.match(/(^|\s)navbar-fixed-\S+/g) || []).join(' ');
    })
    .addClass(className);

  $('a[data-class]').removeClass('active').parent('li').removeClass('active');
  $('a[data-class="'+className+'"]').addClass('active').parent('li').addClass('active');

  fixBodyPadding(className);

}

function fixBodyPadding(className) {
  if (/navbar-fixed-(left|right)/.test(className)) {
    $('body').removeAttr('style');
    if (className === 'navbar-fixed-right') {
      $('body').css('paddingLeft', 0);
    } else {
      $('body').css('paddingRight', 0);
    }
  } else {
    $('body').css({
      "padding-right": 0,
      "padding-left": 0,
      "padding-top": '70px'
    });
  }
}

//ELASTIC PORTAFOLIO
	    $(function(){
 
        $("#elastic_grid").elastic_grid({
            'items' :
            [
			
				{
					//GALLERY 3D
                    'title'         : '3D gallery',
                    'description'   : '3D gallery of generative art. Developed with OpenGL library Three.js. LEFT CLICK = ROTATE, RIGHT CLICK = PANING, SCROLL = ZOOM. ',
                    'thumbnail'     : ['img/250x250/gallery3d-1.jpg', 'img/250x250/gallery3d-2.jpg','img/250x250/gallery3d-3.jpg','img/250x250/gallery3d-4.jpg','img/250x250/gallery3d-5.jpg'],
                    'large'         : ['img/500x500/gallery1.jpg','img/500x500/gallery2.jpg','img/500x500/gallery3.jpg','img/500x500/gallery4.jpg','img/500x500/gallery5.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Go!', 'url' : 'galeria3d/gallery.html' },
                     //   { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                    ],
                    'tags'          : ['WebGL']
                },
				
                {
					//WIREFRAME
                    'title'         : 'Wireframe & mockup',
                    'description'   : 'Wireframe is a visual draft wich contains the schematic design (on paper or digital) and provides a guide of the functionality, the mockup incorporates images, fonts and colours. Tools: Paper, pencil, Photoshop, Illustrator, Adobe Muse.',
                    'thumbnail'     : ['img/250x250/wireframe.png','img/250x250/mockup.png'],
                    'large'         : ['img/500x500/wireframe-mockup.png','img/500x500/mockup.png'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :false,
                    
                    'tags'          : ['Web development']
                },
					//FANTASMA
				{
                    'title'         : 'Fantasma',
                    'description'   : 'First person song. 3D models: 123D Design, Maya. Powered by Unity 3D. ',
                    'thumbnail'     : ['img/250x250/fantasma-coyote.jpg', 'img/250x250/fantasma-cube.jpg','img/250x250/fantasma-fire.jpg'],
                    'large'         : ['img/500x500/fantasma-coyote.jpg', 'img/500x500/fantasma-cube.jpg','img/500x500/fantasma-fire.jpg'],
                    'img_title'     : ['Coyote', 'Album cube', 'Dessert fire'],
                    'button_list'   :
                    [
                        { 'title':'Launch!', 'url' : 'fantasma/index.html' }
                    ],
                    'tags'          : ['Apps','WebGL']
                },
				//LAUD CODEX
                {
                    'title'         : 'Laud Codex',
                    'description'   : 'First person gallery. WebGL version and standalone app for download (Mac, Windows and Linux). Powered by Unity 3D and Maya (3D models)',
                    'thumbnail'     : ['img/250x250/laud-codex.jpg', 'img/250x250/laud-codex-1.jpg','img/250x250/laud-codex-2.jpg'],
                    'large'         : ['img/500x500/laud-codex.jpg', 'img/500x500/laud-codex-1.jpg','img/500x500/laud-codex-2.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Launch app!', 'url' : 'laud-codex-gallery/LaudCodex/index.html' },
                        { 'title':'Download Mac app', 'url':'laud-codex-gallery/LaudCodex_Mac.zip'},
						{ 'title':'Download Win app', 'url':'laud-codex-gallery/LaudCodex_Win.zip'},
						{ 'title':'Download Linux app', 'url':'laud-codex-gallery/LaudCodex_Linux.zip'}
                    ],
                    'tags'          : ['Apps','WebGL']
                },
				 {
					//SONIDO TACUBAYA
                    'title'         : 'Sonido Tacubaya',
                    'description'   : 'Site for arts and multimedia. Dynamic, accesible and clear',
                    'thumbnail'     : ['img/250x250/st.png','img/250x250/st-1.png','img/250x250/st-2.png','img/250x250/st-3.png'],
                    'large'         : ['img/500x500/st.png','img/500x500/st-1.png','img/500x500/st-2.png','img/500x500/st-3.png'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Go to website', 'url' : 'http://www.sonidotacubaya.com' }
                    ],
                    'tags'          : ['Web development']
                },
				//HEALTH
                {
                    'title'         : 'Health template',
                    'description'   : 'Responsive scrolling page. Bootstrap, vegas js, fontawesome and JQuery',
                    'thumbnail'     : ['img/250x250/health.png', 'img/250x250/health-1.png','img/250x250/health-2.png','img/250x250/health-3.png'],
                    'large'         : ['img/500x500/health.png', 'img/500x500/health-1.png','img/500x500/health-2.png','img/500x500/health-3.png'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'health/index.html' }
                    ],
                    'tags'          : ['Web development']
                },
				//SCIENCES-1
                {
                    'title'         : 'Sciences 1',
                    'description'   : 'Informative videos about several events held in the spring of sciences in the city of Namur',
                    'thumbnail'     : ['img/250x250/sciences-1-250x250.jpg'],
                    'large'         : ['img/500x500/sciences-1-500x500.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Watch it', 'url' : 'printemps-de-sciences-namur-1.html' }
                    ],
                    'tags'          : ['Video ralization']
                },
				//SCIENCES-2
                {
                    'title'         : 'Sciences 2',
                    'description'   : 'Informative videos about several events held in the spring of sciences in the city of Namur',
                    'thumbnail'     : ['img/250x250/sciences-2-250x250.jpg'],
                    'large'         : ['img/500x500/sciences-2-500x500.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Watch it', 'url' : 'printemps-de-sciences-namur-2.html' }
                    ],
                    'tags'          : ['Video ralization']
                },
				//TO THE SUN
                {
                    'title'         : 'To the sun',
                    'description'   : 'Informative videos about several events held in the spring of sciences in the city of Namur',
                    'thumbnail'     : ['img/250x250/to-the-sun-250x250.jpg'],
                    'large'         : ['img/500x500/to-the-sun-500x500.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Watch it', 'url' : 'cemetery.html' }
                    ],
                    'tags'          : ['Video ralization']
                },
			
				//AR
				 {	
                    'title'         : 'Alebrijes AR',
                    'description'   : 'Alebrijes is a Augmented Reality app for Android. Autodesk Maya (3D models), powered by Unity 3D and Vuforia SDK.',
                    'thumbnail'     : ['img/250x250/alebrijes250.jpg', 'img/250x250/alebrijes250-1.jpg','img/250x250/alebrijes250-2.jpg','img/250x250/alebrijes250-3.jpg'],
                    'large'         : ['img/500x500/alebrijes.jpg','img/500x500/alebrijes1.jpg','img/500x500/alebrijes2.jpg','img/500x500/alebrijes3.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Download app for Android', 'url' : 'AlebrijesAndroid.apk'}
                    ],
                    'tags'          : ['Apps']
                },
				
				//MUSIC
                {
                    'title'         : 'Music Albums',
                    'description'   : 'Production, coproduction, performance, collaboration and composition in several albums, choreography, theater and installation.',
      				'thumbnail'		: ['img/250x250/Intoxicado_252x252.png', 'img/250x250/ce_ehecatl1-252x252.jpg', 'img/250x250/cero_portada_252x252.jpg', 'img/250x250/mientras-252x252.jpg', 'img/250x250/rock-252x252.jpg', 'img/250x250/Provocando-252x252.jpg', 'img/250x250/Tributo.jpg'],
                    'large'         : ['img/500x500/intoxicado-500x500.jpg', 'img/500x500/ce-ehecatl.jpg', 'img/500x500/cero_portada.jpg', 'img/500x500/MRS.jpg', 'img/500x500/rock.jpg', 'img/500x500/provocando.jpg', 'img/500x500/tributo.jpg'],
                    'img_title'     : ['image #1 title', 'image #2 title'],
                    'button_list'   :
                    [
                        { 'title':'Check "Intoxicado"', 'url' : 'https://itunes.apple.com/gb/album/intoxicado/1105214720' }
                    ],
                    'tags'          : ['Music albums']
                },
				  
            ]
        });
    });