$(document).ready(function() {
		$(".view").hide();
		$(".click").click(function(){
			$(this).next(".view").slideToggle();
		});
});



