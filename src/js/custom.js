(function() {
	"use strict";
	$('[data-toggle = "sidebar"]').click(function(event) {
		event.preventDefault();
		$(".app").toggleClass("sidebar-toggled");
	});
})();
// const sidebarToggle = document.getElementById('[data-toggle="sidebar"]');
// sidebarToggle.addEventListener("click", function(event) {
// 	console.log("clicked");
// });
