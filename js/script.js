// JavaScript Document
/*jshint esversion: 6 */

$(document).ready(function () {
    "use strict"; // Start of use strict
    // Function to create DOM items for Portfolio
    function createPorfolio(pArray) {
        let tList = '';

        for (let i = 0; i < pArray.length; i++) {
            tList += '<div class="' + pArray[i].className + '"><div class="col-xs-12 col-sm-12 col-md-4 mainItem">' +
                '<a href="#modalBox"><img class="img-fluid img-responsive mx-auto d-block" src="' + pArray[i].src + '" id="' + pArray[i].id + '" alt="' + pArray[i].alt + '"></a>' +
                '<div class="caption"><h4>' + pArray[i].description + '</h4></div></div></div>';
        }
        console.log(tList);
        return tList;
    }

    // Function to create DOM items for Yoga and Hobbies
    function createList(pArray) {
        let tList = '';

        for (let i = 0; i < pArray.length; i++) {
            tList += '<div class="' + pArray[i].className + '"><div class="col-xs-12 col-sm-12 col-md-4 mainItem">' +
                '<img class="img-fluid img-responsive mx-auto d-block" src="' + pArray[i].src + '" alt="' + pArray[i].alt + '">' +
                '<div class="caption"><h4>' + pArray[i].description + '</h4></div></div></div>';
        }
        console.log(tList);
        return tList;
    }

    // Function to create carousel indicators
    function createIndicators(pID, pLength){
        let tAdd = '<ol class="carousel-indicators"><li data-target=#' + pID + ' data-slide-to="0" class="active"></li>';

        for (let i = 1; i < pLength; i++) {
            tAdd += '<li data-target=#' + pID + ' data-slide-to="' + i + '"></li>';
        }
        tAdd += '</ol>';
        console.log(tAdd);
        return tAdd;
    }
    // Function to create NAV Portfolio items
    function createNavItems(pID, pOnClick, pArray) {
        let tList = '<ul class="dropdown-menu">';

        for (let i = 0; i < pArray.length; i++) {
            tList += '<li class="page-scroll"><a href="#' + pID + '" data-slide-to="' + i + '" onclick="' + pOnClick + '">' + pArray[i].description + '</a></li>';
        }
        tList += '</ol>';
        console.log(tList);
        return tList;
    }

    let INTERVAL = 6000;
    // Build out DOM for NAV
    $('#navPortfolio').append(createNavItems('carousel-tilePortfolio', "location.href='#portfolio'",portfolioList));
    // Build out DOM for Carousel
    $('#carousel-tilePortfolio').prepend(createIndicators('carousel-tilePortfolio',portfolioList.length)).carousel({interval: INTERVAL, pause: "hover"});
    $('#carousel-tileYoga').prepend(createIndicators('carousel-tileYoga',yogaList.length)).carousel({interval: INTERVAL, pause: "hover"});
    $('#carousel-tileHobby').prepend(createIndicators('carousel-tileHobby',hobbyList.length)).carousel({interval: INTERVAL, pause: "hover"});
    $('#portfolioItems').append(createPorfolio(portfolioList));
    $('#yogaItems').append(createList(yogaList));
    $('#hobbyItems').append(createList(hobbyList));

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // $('.page-scroll a').click(function (event) {
    //     $(this).next('ul').toggle();
    //     event.stopPropagation();
    //     event.preventDefault();
    //     $('html, body').stop();
    // });
    // $('.page-scroll a').bind('click', function (event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // $('#carouselPortfolio').on('slide.bs.carousel', function (e) {
    //
    //     /*
    //     CC 2.0 License Iatek LLC 2018
    //     Attribution required
    //     */
    //
    //     var $e = $(e.relatedTarget);
    //     var idx = $e.index();
    //     var itemsPerSlide = 3;
    //     var totalItems = portfolioList.length;
    //
    //     if (idx >= totalItems-(itemsPerSlide-1)) {
    //         var it = itemsPerSlide - (totalItems - idx);
    //         for (var i=0; i<it; i++) {
    //             // append slides to end
    //             if (e.direction=="left") {
    //                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
    //             }
    //             else {
    //                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
    //             }
    //         }
    //     }
    // });

    // Made changes specific for 3 MAX item view
    // $('.carousel-showmanymoveone .item').each(function () {
    //     let itemToClone = $(this);
    //     const MAXITEMS = 3;
    //
    //     for (let i = 1; i < MAXITEMS; i++) {
    //         itemToClone = itemToClone.prev();
    //         // wrap around if at end of item collection
    //         if (!itemToClone.length) {
    //             itemToClone = $(this).siblings(':first');
    //         }
    //         // grab item, clone, add marker class, add to collection
    //         switch (i) {
    //             case 1:
    //                 itemToClone.children(':first-child').clone()
    //                     .addClass("cloneditem-" + (i))
    //                     .prependTo($(this));
    //                 break;
    //             case 2:
    //
    //                 itemToClone.children(':first-child').clone()
    //                     .addClass("cloneditem-" + (i))
    //                     .appendTo($(this));
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    // });

    // Original Code to allow for more than 3 item view
    $('.carousel-showmanymoveone .item').each(function(){
        let itemToClone = $(this);
        const MAXITEMS=3;

        for (let i=1;i<MAXITEMS;i++) {
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

    $('section[id=portfolio] img').click(function () {
        let source = $(this).attr('id');
        let iframeSRC;
        console.log("Image ID: " + source);

        $('nav, main').css("pointer-events", "none");

        switch (source) {
            case 'dma263_p1':
                iframeSRC = 'src/dma263_p1/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                break;
            case 'dma263_p2':
                iframeSRC = 'src/dma263_p2/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                break;
            case 'prog109_a4':
                iframeSRC = 'src/prog109_a4/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                break;
            case 'prog109_p3':
                iframeSRC = 'src/prog109_p3/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                break;
            case 'prog209_a2':
                iframeSRC = 'src/prog209_a2/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                break;
            case 'prog209_a7':
                iframeSRC = 'src/prog209_a7/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                break;
            case 'prog209_p1':
                iframeSRC = 'src/prog209_p1/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                $('#modalMsg').text('This project below is best when played in a full browser window. Please OPEN in new tab.');
                break;
            case 'prog209_p2':
                iframeSRC = 'src/prog209_p2/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                $('#modalMsg').text('This project below is best when played in a full browser window. Please OPEN in new tab.');
                break;
            case 'prog209_p3':
                iframeSRC = 'src/prog209_p3/index.html';
                $('#modalIframe').attr('src', iframeSRC);
                $('#modalIframe').css('min-height', 1000);
                $('#modalMsg').text('This project below is best when played in a full browser window. Please OPEN in new tab.');
                break;
            case 'galaga':
                iframeSRC = 'http://galaga.w3dev.io/';
                $('#modalIframe').attr('src', iframeSRC);
                $('#modalIframe').css('min-height', 1000);
                $('#modalMsg').text('This project below is best when played in a full browser window. Please OPEN in new tab.');
                break;
            default:
                break;
        }

        $('#aModalIframe').attr('href', iframeSRC);

    });
    $('#modalIframe').on('load', function () {
        // $('#modalIframe').height($('#modalIframe').contents().height());
        $('#modalIframe').iFrameResize({log: true, checkOrigin: false});
    });

    $('#closeModal').click(function () {
        // $('div.iframeBorder').css("min-width", "auto");
        $('nav, main').css("pointer-events", "auto");
    });

    $('#btnSubmit').click(function () {
        var EMAIL = 'gabe@w3dev.io';
        var $name = $(contactName).val();
        var $email = $(contactEmail).val();
        var $phone = $(contactPhone).val();
        var $body = $(contactMessage).val();
        var maillink = 'mailto:' + EMAIL + '?' + 'subject=Email%20from%20' + $name + '.%20Email:%20' + $email + '.%20Contact%20Phone:%20' + $phone + '&body=' + $body;

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
