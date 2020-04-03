window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var header = document.getElementById('site-header');
	var jumbotronHeight = document.getElementById('about').offsetHeight;
	var nav = document.getElementById('navbar');

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		header.style.top = "-100px";
	} else {
		header.style.top = "0";
	}

	if (document.body.scrollTop > jumbotronHeight || document.documentElement.scrollTop > jumbotronHeight) {
		nav.classList.add("border-top-primary");
	} else {
		nav.classList.remove("border-top-primary");
	}
}
