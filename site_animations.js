$(document).ready(function(){

  var nextSlide = $("#slides img:first-child");
	var nextSlideSource;
		
	// start slide show
    setInterval( function () {   
       	$("#slide").fadeOut(500,
       		function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				$("#slide").attr("src", nextSlideSource).fadeIn(500);
			}
		);    // end callback
	},
    3000);

    // Fade in the three paragraphs on the page, each staggered
    $("#firstItem").fadeIn(1000);
    $("#secondItem").delay(1000).fadeIn(1000);
    $("#thirdItem").delay(2000).fadeIn(1000);
    
    // Cause a gold shadow to appear behind the company name when hovered over
    $("h1").hover(function(){
      $(this).css("text-shadow", "2px 2px 8px #FDB927");
      }, function(){
      $(this).css("text-shadow", "none");
    });

    /* This function should cause the image of the drone displayed on the page to move up
     * and then to the right before coming back down. My goal was to make it look like the
     * drone was taking off, flying across the page, and finally landing next to the house.
     * The house should only appear after the user hovers over the drone and the function is
     * set in motion. The first resource cited below helped me learn how to use a flag variable
     * to make it so that the function would only occur once (not allowing the user to keep
     * hovering over the image and cause it to move again). The second resource cited below
     * helped me learn how to get the message below the drone to only show up after the drone
     * had landed. The resource I cited actually uses the opposite effect as the one in my project.
     */

    // https://stackoverflow.com/questions/11691055/execute-jquery-animate-only-one-time
    var flag = true;
    $("#drone").hover(function(){
        if (flag) {
        $("#drone").animate({ top: -300}, 1000);
        $("#drone").animate({ left: 600,}, 2000);
        $("#drone").animate({ left: 600, top: 0}, 1000);
        $("#preFlightMessage").text("");
        $("#house").show();
        // https://forum.jquery.com/topic/show-then-delay-and-finally-hide
        $("#postFlightMessage").text("Coming Soon... Drone Delivery!").hide(0).delay(4000).show(0);
        flag = false;
        }

      });

      /* This function should allow the user to open and close the content box displayed on the page.
       * I used a slideToggle effect to go back and forth between hiding and showing the content box.
       * The resource contained within this function helped me learn how to modify the text in the 
       * heading based on whether the box is showing or not and uses the shorthand ternary operator.
       */
      $("#content-heading").click(function(){
        $("#content-box").slideToggle("slow");
        // https://stackoverflow.com/questions/2155453/jquery-toggle-text
        $(this).text($(this).text() == 'Click to collapse' ? 'Click to expand' : 'Click to collapse');
      });

      /* The function below should cause an image of a lightning bolt to flash in and out on the page
       * as part of the "FLASH SALE" caption below it. I used an interval timer for this function
       *  and did my best to make it like a real lightning strike. 
       */ 
      function lightningStrike() {
        $("#bolt").fadeIn(0);
        $("#bolt").fadeOut(200);
        $("#bolt").fadeIn(0);
        $("#bolt").fadeOut(100);
        $("#bolt").delay(500).fadeIn(0);
        $("#bolt").fadeOut(200);
      }
      setInterval (lightningStrike, 2000);
  });