
$(document).ready(function() {

	var perc = Number($('.progress-bar').attr('aria-valuenow'));
	var checkInt = setInterval(function() {
		debugger;
		perc += (100-perc)/2;
		if (perc > 99.99) {
			clearInterval(checkInt);
			$('.alert').show();
			return;
		}
		$('.progress-bar').css('width', perc+'%');
	}, 750);
});


