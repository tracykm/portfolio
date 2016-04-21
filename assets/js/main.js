/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

document.onmousemove = handleMouseMove;
document.onscroll = handleScroll;
window.onresize = handleResize;

function handleMouseMove(event) {
	event = event || window.event; // IE-ism
  turnTowards(event.pageX)
}

function handleResize(event){
  turnTowards(0)
}

function handleScroll(event){
	turnTowards(window.innerWidth/2 + 50)
}

var lastFrame = 0;
var targetFrame;
var TOTAL_FRAMES = 13;
var ASPECTRATIO = .56295525494;

function turnTowards(xPos){
  var percentWidth =  xPos / window.innerWidth

  targetFrame = Math.floor(TOTAL_FRAMES * percentWidth);

	moveTowards(targetFrame)
}

function moveTowards(curTarget){
	if (lastFrame === curTarget || curTarget !== targetFrame) {
		return
	}else{
		if(lastFrame < curTarget){
			lastFrame++
		}else if(lastFrame > curTarget){
			lastFrame--
		}

		var offset = getOffSet({
				'rows': 5,
				'columns':3,
				'width':window.innerWidth * 3,
				'height':window.innerWidth * ASPECTRATIO * 5
			}, lastFrame);

		// negative to move them so up and to the left so you can still see the img
		document.getElementById("turningSprite").style.left = offset[0]*-1 +"px";
		document.getElementById("turningSprite").style.top = offset[1]*-1 +"px";

		setTimeout(function(){
			moveTowards(targetFrame);
		}, 500)
	}
}


function getOffSet(specs, frame){
  var imgWidth = specs.width / specs.columns;
  var imgHeight = specs.height / specs.rows;
  var x = imgWidth * (frame % specs.columns);
  var y = imgHeight * Math.floor(frame / specs.columns);
  return [x, y]
}


})(jQuery);
