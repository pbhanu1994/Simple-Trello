$(document).ready(function(){
	sessionStorage.clear()
	var name = prompt("Hello, What's your name?","");
	if(name != 0){
		document.getElementById("namehere").innerHTML = "Hello, "+name+"!";
	}else{
		document.getElementById("namehere").innerHTML = "Hello, No name!";
	}
	
});

function close_x(){
	document.getElementById("note").style.display = 'none';
}

var p = 0; //this line
$("#addtask").keyup(function(e) {
    if(e.keyCode == 13) {
    	var keys="taskname";
    	
        var data = document.getElementById("addtask").value;
        if(data == ""){
        	alert("Please enter the Task!")
        }else{
        	sessionStorage.setItem(keys+p,data); //keys+p??
       		display();
       		p++;
        }
		
	}
});
function display(){
	document.getElementById("addtask").value = "";
	var itemsbox = document.getElementById("items");

	for(var x=p;x<sessionStorage.length;x++){
		var a = sessionStorage.key(x);
		var key_var = sessionStorage.getItem(a);
		itemsbox.innerHTML += '<div id="item'+[x]+'" draggable="true" ondragstart="drag(ev);" style="background-color:yellow;margin-bottom:5px;"><span id="close1" onclick="close_1('+x+');">x</span><center><span>'+key_var+'</span></center></div>';	
	}
}

function close_1(x){
		document.getElementById("item"+[x]).style.display = "none";
}

function drag(ev){
	//var code = document.getElementById("item"+[x]);
	ev.dataTransfer.setData("text",ev.target.id);
	alert("it's been dragging");
}
function allowdrag(ev){
	ev.preventDefault();
	document.getElementById("doing-box-footer").style.height = "50px";
	document.getElementById("doing-box-footer").style.background = "red";
	document.getElementById("doing-box-footer").style.border = "2px dotted yellow";
}
function drop(ev){
	ev.preventDefault();
	var datas = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(datas));
}