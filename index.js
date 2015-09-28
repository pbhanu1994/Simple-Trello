$(document).ready(function(){
	sessionStorage.clear();
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

var p = 0; 
$("#addtask").keyup(function(e) {
    if(e.keyCode == 13) {
    	var keys="taskname";  	
        var data = document.getElementById("addtask").value;
        if(data == ""){
        	alert("Please enter the Task!")
        }else{
        	sessionStorage.setItem(keys+p,data); 
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
		itemsbox.innerHTML += '<div id="item'+[x]+'" draggable="true" ondragstart="drag(event);" style="background-color:yellow;cursor:pointer;box-shadow: 2px 2px 2px #888888;margin-bottom:5px;"><span id="close1" title="Delete" onclick="close_1('+x+');">x</span><center><span style="font-size:28px;">'+key_var+'</span></center></div>';	
	}
}

function close_1(x){
		document.getElementById("item"+[x]).style.display = "none";
		// sessionStorage.removeItem('taskname'+x);
}

function drag(ev){
	//var code = document.getElementById("item"+[x]);
	ev.dataTransfer.setData("text",ev.target.id);
	//alert("it's been dragging");
}
function allowdrag(ev){
	ev.preventDefault();
	var items = document.getElementById("items");
	var doing = document.getElementById("doing-box-footer");
	var done = document.getElementById("done-box-footer");	

	items.style.padding = "0 0 50px";
	items.style.background = "#F3F393";
	items.style.border = "2px dotted yellow";

	doing.style.padding = "0 0 50px";
	doing.style.background = "orange";
	doing.style.border = "2px dotted yellow";

 	done.style.padding = "0 0 50px";
 	done.style.background = "lightgreen";
 	done.style.border = "2px dotted yellow";
}
function drop(ev){
	ev.preventDefault();
	var datas = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(datas));
	
 }