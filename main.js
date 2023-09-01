function buttonClicked() {
      console.log("daaaymmmmm")
      
			var image = document.getElementById("buttonImage");

			// add the clicked class to apply the animation
			image.classList.add("clicked");

			// remove the clicked class after the animation is finished
			setTimeout(function() {
				image.classList.remove("clicked");
			}, 300); // set the timeout to the same duration as the animation
  
			// add code here to get input from the button
      
}


requestAnimationFrame(function render() {
  requestAnimationFrame(render);
});
