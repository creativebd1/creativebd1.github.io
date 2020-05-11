// Navigation Menu 
const burgerMenu = document.querySelector(".burger");
const navItems = document.querySelector(".navItems");
const navItem = document.querySelectorAll(".navLink");
// Enable Disable menu on click
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerActive");
  navItems.classList.toggle("navOpen");
});
// Disappear overlay menu on click
$('.navLink').on('click', function(){
  $(".burger").removeClass("burgerActive");
  $(".navItems").removeClass("navOpen");
});
// Typed content
let typed3 = new Typed('#typed', {
  strings: ['Graphics Designer', 'Virtual Assistant', 'Data Entry Specialist'],
  typeSpeed: 40,
  backSpeed: 40,
  smartBackspace: true, // this is a default
  loop: true,
  showCursor: false,
});

// Filtered Gallery
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterColumn");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    mafRemoveClass(x[i], "showFilter");
    if (x[i].className.indexOf(c) > -1) mafAddClass(x[i], "showFilter");
  }
}
// Show filtered elements
function mafAddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function mafRemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("filterButton");
let btns = btnContainer.getElementsByClassName("filterButton");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("activeFilter");
    current[0].className = current[0].className.replace(" activeFilter", "");
    this.className += " activeFilter";
  });
}
// Testimonial Gallery Interactivity
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
// Dynamic Date 
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

window.addEventListener("scroll", function() {showFunction()});
function showFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".socialBar").style.display = "flex";
  } else {
    document.querySelector(".socialBar").style.display = "none";
  }
}

