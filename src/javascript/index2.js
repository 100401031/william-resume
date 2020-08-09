// ge style of navbar on scroll
window.onscroll = function() {
  showNavbar()
  showPath()
}

window.onload = function() {
  loadNav()
};

function loadNav() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  var windowHeight = window.innerHeight;
  var docScrollHeight = document.body.scrollHeight;
  var scrollPercent = (scrollTop + windowHeight) / docScrollHeight;
  var scrollPercentOfTop = scrollTop / windowHeight;
  var navbar = document.getElementById("myNavbar");
  var navTitle = document.getElementById("nav-title");
  var progressBar = document.getElementById("progressBar");
  if (scrollTop < windowHeight + 1) {
    navbar.style.background = "rgba(40, 40, 40, " + scrollPercentOfTop * 0.85 + ")";
    progressBar.className = "progress-bar";
    progressBar.style.opacity = scrollPercentOfTop;
    progressBar.style.width = scrollPercent * 100 + '%';
    if (scrollTop >= windowHeight / 2 - 30) {
      navTitle.style.opacity = scrollPercentOfTop;
    } else {
      navTitle.style.opacity = 0;
    }
  } else {
    navbar.className = "w3-bar" + " nav-shadow";
    progressBar.className = "progress-bar";
    navbar.style.background = "rgba(40, 40, 40, 0.85)";
    progressBar.style.opacity = scrollPercentOfTop;
    progressBar.style.width = scrollPercent * 100 + '%';
      navTitle.style.opacity = 1;
  }
}


function showNavbar() {

  var navbar = document.getElementById("myNavbar");
  var progressBar = document.getElementById("progressBar");
  var sparkle = document.getElementsByClassName("sparkle");
  var navTitle = document.getElementById("nav-title");

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  var windowHeight = window.innerHeight;
  var docScrollHeight = document.body.scrollHeight;

  var scrollPercent = scrollTop / (docScrollHeight-windowHeight);
  var scrollPercentOfTop = scrollTop / windowHeight;
  progressBar.className = "progress-bar";
  navbar.className = "w3-bar"; // +"w3-animate-top"

  console.log('scrollTop=' + scrollTop);
  console.log('docScrollHeight=' + docScrollHeight);
  if (scrollTop > windowHeight - 46) {
    navbar.className = "w3-bar" + " nav-shadow";
    navbar.style.background = "rgba(40, 40, 40, 0.85)";
    progressBar.style.opacity = scrollPercentOfTop;
      navTitle.style.opacity = 1;
    if (scrollPercent > 0.99) {
      var sparkle = document.getElementsByClassName("sparkle");
      for (var i = 0; i < sparkle.length; i++) {
        sparkle[i].style.display = "inline";
      }
    } else {
      for (var i = 0; i < sparkle.length; i++) {
        sparkle[i].style.display = "none";
        sparkle[i].className = "sparkle" + " sparkle-animation";
        sparkle[i].className = "sparkle" + " sparkle-color-" + (i + 1) + " sparkle-animation-" + (i + 1);
      }
    };
  } else {
    navbar.style.background = "rgba(40, 40, 40, " + scrollPercentOfTop + ")";
    progressBar.style.opacity = scrollPercentOfTop;
    //navbar.className = navbar.className.replace(" w3-card w3-animate-top nav-bg", "");
    //progressBar.className = progressBar.className.replace("progress-bar","");
  };

  if (scrollTop >= windowHeight / 2 - 30) {
    navTitle.style.opacity = scrollPercentOfTop;
  } else {
    navTitle.style.opacity = 0;
  }
  //console.log('scrollTop/windowHeight='+scrollTop/windowHeight);
  progressBar.style.width = scrollPercent * 100 + '%';
  // console.log('scrollTop'+scrollTop);
  // console.log('windowHeight'+windowHeight);
  // console.log('docScrollHeight'+docScrollHeight);
  // console.log('scrollPercent'+scrollPercent);
  // console.log('-----------------------------');
};




// hide the navbar when scrolling down
$(function() {

  var position = $(window).scrollTop();
  var topBox = $("#topBox");
  h = $(window).height();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var noticeContainer = $(".jBox-Notice");
    if (position < h) {
      position = scroll;
    } else {
      if (scroll > position) { //down
        topBox.css("transform", "translate(0,-43px)"); //chage the properties of transition at the CSS element : .top-box
        topBox.css("transform", "translate(0,-43px)");
        noticeContainer.css("top", "11px");
        noticeContainer.css("top", "11px");
        console.log(noticeContainer.css('top'));
        $("#myNavbar").removeClass("w3-card");
      } else { //up
        topBox.css("transform", "translate(0,0px)");
        topBox.css("transform", "translate(0,0px)");
        noticeContainer.css("top", "55px");
        noticeContainer.css("top", "55px");

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
      if (s > h - 46) {
        $("#myNavbar").css("background", "rgba(40, 40, 40, 1)");
      }
      //console.log(s > h)
    },
    function() {
      let s = $(document).scrollTop();
      let h = $(window).height();
      if (s > h - 46) {
        $("#myNavbar").css("background", "rgba(40, 40, 40, 0.85)");
      }
    }
  );
  // console.log('s'+s +'|'+ 'h'+ h);
  /* Check the location of each desired element */
  $(function() {
    $('.hide-pic').each(function(i) {

      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);


      }

    });
  });
});

/* Check the location of each desired element */
$(function() {
  $('.hide-pic').each(function(i) {

    var bottom_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {

      $(this).animate({
        'opacity': '1'
      }, 500);
    }
  });
});



$(document).ready(function() {
  $(window).scroll(function() {
    var s = $(this).scrollTop(),
      h = $(window).height(),
      d = $(document).height();
    var techUi = $(".tech-ui-effect");
    var coverBox = $(".cover");
    var filterVal = 'blur(' + (0.2049 + s / h) + 'px)'; //.2049
    var scrollPercent = ((s + h) / d) * 100;
    // $(".progress-bar").css("width", scrollPercent + "%"); //progress bar
    techUi.css({
      opacity: (s - h / 2) / h + 0.6
    });
    $(".outerspace").css('filter', filterVal); //blur
    /* guider on the navigater*/
    var navGuider = $(".nav-guider");
    var navGuiderEn = $(".nav-guider-en");
    var aboutPosition = $("#about").offset().top;
    var portfolioPosition = $("#portfolio").offset().top;
    var buttonNumber;

    if (s < h) {
      buttonNumber = 1;
    } else {}
    if (portfolioPosition - 1 > s && s > aboutPosition - 1) {
      buttonNumber = 2;
    } else {

    }
    if (s > portfolioPosition - 1) {
      buttonNumber = 3;
    } else {

    }
    switch (buttonNumber) {
      case 1:
        navGuider.css("transform", "translate(-23px,20px)");
        navGuiderEn.css("transform", "translate(-23px,20px)");
        break;
      case 2:
        navGuider.css("transform", "translate(55px,20px)");
        navGuiderEn.css("transform", "translate(60px,20px)");
        break;
      case 3:
        navGuider.css("transform", "translate(148px,20px)");
        navGuiderEn.css("transform", "translate(170px,20px)");
        break;
      default:
    };

    // /*Show skill bar when appearing */
    /* Check the location of each desired element */
    $('.exp').each(function(i, v) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 500);
        $(this).animate({
          'width': '99.9%'
        }, 1300, function() {
          $('.rocket:eq(' + i + ')').animate({
            'left': '100px',
            'opacity': '0'
          }, 1000, function() {
            $('.rocket:eq(' + i + ')').animate({
              'display': 'none'
            }, 1000);
          });
        });
      }
    });

    $(function portfolioHeight() {
      var middle_of_object = $(".bgimg-3").offset().top + $(".bgimg-3").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > middle_of_object) {
        $(".bgimg-3").css('height', '400px');
      }
    });
  });
  $('.exp').each(function(i, v) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {
      $(this).animate({
        'opacity': '1'
      }, 500);
      $(this).animate({
        'width': '100%'
      }, 1300, function() {
        $('.rocket:eq(' + i + ')').animate({
          'left': '100px',
          'opacity': '0'
        }, 1000, function() {
          $('.rocket:eq(' + i + ')').animate({
            'display': 'none'
          }, 1000);
        });
      });
    }
  });
});

var moveForce = 1; // max popup movement in pixels
var rotateForce = 1; // max popup rotation in deg

$(document).mousemove(function(mouse) {
  var docX = $(window).width();
  var docY = $(window).height();
  var moveX = (mouse.pageX - docX / 2) / (docX / 2) * -moveForce;
  var moveY = (mouse.pageY - docY / 2) / (docY / 2) * -moveForce;

  var rotateY = (mouse.pageX / docX * rotateForce * 2) - rotateForce;
  var rotateX = -((mouse.pageY / docY * rotateForce * 2) - rotateForce);
  var astronant = $(".astronant");
  astronant.css("transform", "translate(" + moveX * 20 + "px," + moveY * 20 + "px)");
  $(".tech-ui-effect").css("transform", "translate(" + moveX * -4 + "px," + moveY * -4 + "px) scale(1.1)");

});

$('.flip').mousemove(function(e) {

  var xPos = $(this).position().left;
  var yPos = $(this).position().top;

  var mouseX = e.pageX;
  var mouseY = e.pageY;

  var left = e.pageX - xPos;
  var xOffset = left - $(this).width() / 2;
  var top = e.pageY - yPos;
  var yOffset = top - $(this).height() / 2;
  var xPerc = (xOffset / $(this).width()) * 40;
  var yPerc = (yOffset / $(this).height()) * 40;

  TweenMax.to($(this), 2, {
    rotationX: 0.3 * yPerc,
    rotationY: -0.3 * xPerc,
    transformOrigin: "center center -30",
    ease: Expo.easeOut
  });

  TweenMax.to($(this).find('.frame-grad'), 2, {
    opacity: top / $(this).height(),
    ease: Expo.easeOut
  });

  TweenMax.to($(this).find('.frame-shad'), 2, {
    opacity: 0.15 - top / $(this).height() / 2,
    ease: Expo.easeOut
  });

});








/* to scale the photo with mouseover */
$('.tiles')
  .on('mouseover', function() {
    $(this).children('.photo').css({
      'transform': 'scale(' + $(this).attr('data-scale') + ')'
    });
  })
  .on('mouseout', function() {
    $(this).children('.photo').css({
      'transform': 'scale(1)'
    });
  })
  .on('mousemove', function(mouseEvent2) {

    $(this).children('.photo').css({
      'transform-origin': ((mouseEvent2.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((mouseEvent2.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
    });

  })



// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navToggle");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = $(".filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
      $(x[i]).show("1000");
    } else {
      $(x[i]).hide("1000");
    }
  }
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






// When the page scrolls...
function showPath() {
  // Get a reference to the <path>
  var path = document.querySelector('#path1');

  // Get length of path... ~577px in this demo
  var pathLength = path.getTotalLength();
  var aboutPosition = document.getElementById("about").offsetTop;
  // Make very long dashes (the length of the path itself)
  path.style.strokeDasharray = pathLength + ' ' + pathLength;

  // Offset the dashes so the it appears hidden entirely
  path.style.strokeDashoffset = pathLength;

  // What % down is it?
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop - 50) / aboutPosition;
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  // Draw in reverse
  if (scrollPercentage >= 0.99) {
    path.style.strokeDashoffset = scrollPercentage;
  } else {
    path.style.strokeDashoffset = pathLength - drawLength;
  }



};

$(document).ready(function() {
  var certificationPhoto =  new jBox('Image');
    certificationPhoto.getTitle('data-jbox-title-none');
    certificationPhoto.getContent('data-jbox-content');
});


var toolTip = new jBox('Tooltip');
toolTip.attach('.info-tooltip');


var moreInfo = ["我來自花蓮純樸的小鄉村，熱愛大自然、山林、海洋，總能使我內心靜謐，也是我動力、靈感的泉源",
  "希望透過設計、藝術、創作來傳遞、分享美好的事物與感受",
  "設計注重細節，能確保每個環節都能有效且精準地傳遞資訊、概念",
  "大學大眾傳播、新聞資訊相關的課程讓我能掌握傳播概念與受眾的研究分析，以達到UX優化的目的",
  "對網頁、APP開發有熱忱，能不斷研究學習、開創符合產品及使用者需求的功能，同時注重介面上、視覺上各種表現的可能"] ;
var infoNumber = moreInfo.length;
var originalInfoNumber = moreInfo.length;

$('#photoBox').click(function noticeBottom(){
var infoLoop = (infoNumber) % moreInfo.length;
console.log(infoLoop);
infoNumber++;
console.log(infoNumber);
new jBox('Notice', {
    trigger: 'click',
    content: ' <span class="photo-info-count">'+(infoLoop+1)+'</span>'+moreInfo[infoLoop],//+' <span class="">'+(infoLoop+1)+' of '+originalInfoNumber+'</span>'
    color: 'custom',
    position: {
      x: 5,
      y: 55
    },
});
});
