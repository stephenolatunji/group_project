$(document).ready(function() {
	let btn = $("#top");
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.style.display = "block";
		} else {
			btn.style.display = "none";
		}
	});

	btn.on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "300");
	});
});
