const handleHover = () => {
	topGuy.src = 'img/1/1hover.png';
};

const handleHoverOut = () => {
	topGuy.src = 'img/1/1.png';
};

const topGuy = document.querySelector('.top_guy');
topGuy.addEventListener('mouseover', handleHover);
topGuy.addEventListener('mouseout', handleHoverOut);







$(document).ready(function() {



	$(".slider_button").click(function () {

		$(".slider_button").removeClass('active');
		$(this).addClass('active');

	});

$('#slider_button1').on('click', function() {
  $('.video_preview iframe')[0].src= 'https://www.youtube.com/embed/izV7GKRaiVI?controls=0';
});

$('#slider_button2').on('click', function() {
  $('.video_preview iframe')[0].src= 'https://www.youtube.com/embed/DZXKQjN-TY0?controls=0';
});

$('#slider_button3').on('click', function() {
  $('.video_preview iframe')[0].src= 'https://www.youtube.com/embed/Ac5smOyOmbY?controls=0';
});

	$('#slider_button4').on('click', function() {
  $('.video_preview iframe')[0].src= 'https://www.youtube.com/embed/FScXmHx3zpU?controls=0';
});




		// плавное перемещение страницы к нужному блоку
	$(".to_bottom_a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

		$(".navbar-nav > li > a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});



	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

$('.popup-youtube').magnificPopup({ 
    type: 'iframe' 
 });

});
