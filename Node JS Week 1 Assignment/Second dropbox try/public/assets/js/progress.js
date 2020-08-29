function progress() {
	$('#file_input').css('visibility', 'hidden');
	$('#progress').css('visibility', 'visible');
	$('#storage').remove();
	$("#upload_button").attr("disabled", true);
	return true;
}