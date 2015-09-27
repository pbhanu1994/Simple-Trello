function close_x(){
	document.getElementById("note").style.display = 'none';
}

$("#addtask").keyup(function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
	}
});