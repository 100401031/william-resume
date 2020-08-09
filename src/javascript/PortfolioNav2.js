

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var progressBar = document.getElementById("progressBar");
    var sparkle = document.getElementsByClassName("sparkle");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var docScrollHeight = document.body.scrollHeight;
    var scrollPercent = scrollTop / (docScrollHeight-windowHeight);
    progressBar.className = "progress-bar";
    var scrollPercentForNav = (scrollTop - windowHeight * 1 / 8) / (windowHeight / 8);
    navbar.className = "w3-bar" + "" + " w3-animate-top";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.className = "w3-bar" + "" + " w3-animate-top" + " nav-shadow";
        navbar.style.background = "rgba(40, 40, 40, 0.85)";
        progressBar.style.opacity = 1;
        if(scrollPercent>0.99){
          var sparkle = document.getElementsByClassName("sparkle");
          for (var i = 0; i < sparkle.length; i++) {
            sparkle[i].style.display = "inline";
          }
        }else {
           for (var i = 0; i < sparkle.length; i++) {
             sparkle[i].style.display = "none";
             sparkle[i].className = "sparkle"+" sparkle-animation";
             sparkle[i].className = "sparkle"+" sparkle-color-"+(i+1)+" sparkle-animation-"+(i+1);
           }
        };
    } else {
      navbar.style.background = "rgba(40, 40, 40, " + 0.85 * scrollPercentForNav + ")";
        navbar.className = navbar.className.replace("w3-animate-top nav-shodow", "");
        progressBar.style.opacity = 0;
    }
    progressBar.style.width = scrollPercent*100 + '%';
    console.log('scrollTop'+scrollTop);
    console.log('windowHeight'+windowHeight);
    console.log('docScrollHeight'+docScrollHeight);
    console.log('scrollPercent'+scrollPercent);
    console.log('progressBar.style.opacity'+progressBar.style.opacity);
    console.log('-----------------------------');
}


// hide the navbar when scrolling down
$(function() {
  var position = $(window).scrollTop();
  var topBox = $("#topBox");
  var worksTablePos = $("#works-table").offset().top;
  h = $(window).height();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (position < worksTablePos) {
      position = scroll;
    } else {
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
    }
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
      console.log(s > h)
    },
    function() {
      let s = $(document).scrollTop();
      let h = $(window).height();
      if (s >20) {
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
