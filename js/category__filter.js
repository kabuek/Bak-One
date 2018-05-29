$(function() {
	$('.port-categories button').click(function() {
		var get_id = this.id;
		var get_current = $('.port-items .' + get_id);

		$('.item').not(get_current).hide(300);
		get_current.show(300);
	});

	$('#showall').click(function() {
		$('.item').show(300);
	});
});