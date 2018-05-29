var modal_window = document.getElementById('modal');
var modal_btn = document.getElementById('modal_btn')
var close = document.getElementById('close');

modal_btn.onclick = function() {
	modal_window.classList.remove('hide');
	modal_window.classList.add('show');
}

close.onclick = function() {
	modal_window.classList.remove('show');
	modal_window.classList.add('hide');
}