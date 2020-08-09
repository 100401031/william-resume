$(document).ready(function() {
    var navbar = $("#myNavbar");
    var progressBar = $("#progressBar");
    var sparkle = $(".sparkle");
    var navTitle = $("#nav-title");

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var docScrollHeight = document.body.scrollHeight;

    var scrollPercent = scrollTop / (docScrollHeight - windowHeight);
    var scrollPercentOfTop = scrollTop / windowHeight;
    var ticking = false;

    progressBar.addClass('progress-bar');
    navbar.addClass('w3-bar'); // +"w3-animate-top"

    function onScroll() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        windowHeight = window.innerHeight;
        docScrollHeight = document.body.scrollHeight;
        requestTick();
    }

    function onResize() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        windowHeight = window.innerHeight;
        docScrollHeight = document.body.scrollHeight;
        requestTick();
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }

    function update() {
        scrollPercent = scrollTop / (docScrollHeight - windowHeight);
        scrollPercentOfTop = scrollTop / windowHeight;
        // console.log('scrollTop=' + scrollTop);
        // console.log('windowHeight=' + windowHeight);
        // console.log('docScrollHeight=' + docScrollHeight);
        // console.log('scrollPercent=' + scrollPercent);
        if (scrollTop > windowHeight - 20) {
            navbar.addClass('nav-shadow');
            navbar.css("background", "rgba(40, 40, 40,0.85)");
            progressBar.css("opacity", "1");
            navTitle.css("opacity", "1");
        } else {
            navbar.removeClass('nav-shadow');
            navbar.css("background", "rgba(40, 40, 40, " + scrollPercentOfTop + ")");
            progressBar.css("opacity", scrollPercentOfTop);
            //navbar.className = navbar.className.replace(" w3-card w3-animate-top nav-bg", "");
            //progressBar.className = progressBar.className.replace("progress-bar","");
        };

        if (scrollTop >= windowHeight / 2 - 30) {
            navTitle.css("opacity", scrollPercentOfTop);
        } else {
            navTitle.css("opacity", "0");
        }
        //console.log('scrollTop/windowHeight='+scrollTop/windowHeight);
        progressBar.css("width", scrollPercent * 100 + '%');
        // console.log('scrollTop'+scrollTop);
        // console.log('windowHeight'+windowHeight);
        // console.log('docScrollHeight'+docScrollHeight);
        // console.log('scrollPercent'+scrollPercent);
        // console.log('-----------------------------');
        ticking = false;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, false);

    update();
});


// hide the navbar when scrolling down
$(function() {
    var position = $(window).scrollTop();
    var topBox = $("#topBox");
    // var worksTablePos = $("#works-table").offset().top;
    h = $(window).height();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > position) { //down
            topBox.css("transform", "translate(0,-38.5px)"); //chage the properties of transition at the CSS element : .top-box
            topBox.css("transform", "translate(0,-38.5px)");
            $("#myNavbar").removeClass("w3-card");
            console.log('down');
        } else { //up
            topBox.css("transform", "translate(0,0px)");
            topBox.css("transform", "translate(0,0px)");

        }
        position = scroll;
    });

});

$(window).scroll(function() {

    $("#topBox").hover(
        function() {
            let s = $(document).scrollTop();
            let h = $(window).height();
            if (s > 20) {
                $("#myNavbar").css("background", "rgba(40, 40, 40, 1)");
            }
            // console.log(s > h)
        },
        function() {
            let s = $(document).scrollTop();
            let h = $(window).height();
            if (s > 20) {
                $("#myNavbar").css("background", "rgba(40, 40, 40, 0.85)");
            }
        }
    );
    // console.log('s'+s +'|'+ 'h'+ h);
});



// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}