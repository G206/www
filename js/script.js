// JavaScript Document

$(document).ready(function () {
    "use strict"; // Start of use strict
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);

      for (var i=1;i<6;i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });

	$('section[id=portfolio] img').click(function(){
		var source = $(this).attr('id');
		console.log("Image ID: " + source);

		// $('div.iframeBorder').css("min-width", "1050px");

		$('nav, main').css("pointer-events", "none");

		switch (source) {
			case 'dma263_p1':
				$('#modalIframe').attr('src', 'src/dma263_p1/index.html');
				break;
			case 'dma263_p2':
				$('#modalIframe').attr('src', 'src/dma263_p2/index.html');
				break;
			case 'prog109_a4':
				$('#modalIframe').attr('src', 'src/prog109_a4/index.html');
				break;
			case 'prog109_p3':
				$('#modalIframe').attr('src', 'src/prog109_p3/index.html');
				break;
			case 'prog209_a2':
				$('#modalIframe').attr('src', 'src/prog209_a2/index.html');
				break;
			case 'prog209_a7':
				$('#modalIframe').attr('src', 'src/prog209_a7/index.html');
				break;
			case 'prog209_p1':
				$('#modalIframe').attr('src', 'src/prog209_p1/index.html');
				break;
			case 'prog209_p2':
				$('#modalIframe').attr('src', 'src/prog209_p2/index.html');
				break;
			default:
				break;
		}

	});
    $('#modalIframe').load(function () {
        // $('#modalIframe').height($('#modalIframe').contents().height());
        $('#modalIframe').iFrameResize({log:true});
    });

	$('#closeModal').click(function(){
		// $('div.iframeBorder').css("min-width", "auto");
		$('nav, main').css("pointer-events", "auto");
	});

    $('#btnSubmit').click(function () {
        var $name = $(contactName).val();
        var $email = $(contactEmail).val();
        var $phone = $(contactPhone).val();
        var $body = $(contactMessage).val();
        var maillink = 'mailto:w3dev@yahoo.com' + '?' + 'subject=Email%20from%20' + $name + '.%20Email:%20' + $email +'.%20Contact%20Phone:%20' + $phone +'&body='+ $body;

        $('#aSubmit').attr('href', maillink);
        $('#aSubmitLink').click();
        //window.open(maillink, '_top');
    });

    $('#followMe').on('click', 'a', function () {
        $('#followMeBox').show();
    });

    $('#followMeBox h4').click(function () {
        $('#followMeBox').hide();
    });

});

// function($) {
//
// })(jQuery); // End of use strict
