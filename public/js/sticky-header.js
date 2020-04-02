window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var header = document.getElementById('site-header');
	var navBorder = document.getElementById('navbar-border');
	var jumbotronHeight = document.getElementById('about').offsetHeight;
	// var nav = document.getElementById('navbar');

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		// header.classList.add("position-absolute");
		// header.classList.remove("top-3");
		header.style.top = "-100px";
		// navBorder.classList.remove("d-none");
		// navBorder.classList.add("d-flex");

		console.log("jumbotronHeight = " + jumbotronHeight);
		console.log("scroll = " + document.body.scrollTop);
	} else {
		// header.classList.add("top-3");
		// header.classList.remove("position-absolute");
		header.style.top = "0";
		// navBorder.classList.remove("d-flex");
		// navBorder.classList.add("d-none");
	}

	// if(document.body.scrollTop > jumbotronHeight) {
	// 	navBorder.classList.remove("d-none");
	// 	navBorder.classList.add("d-flex");

	// 	nav.classList.add("border");
	// } else {
	// 	navBorder.classList.remove("d-flex");
	// 	navBorder.classList.add("d-none");

	// 	nav.classList.remove("border");
	// }
}
