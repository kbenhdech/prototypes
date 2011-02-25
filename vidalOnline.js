var sServer ="http://www.vidalonline.com/medecin/search.html";

function inputUser(){
	var userInput = document.getElementById("inputSearchVO").value;
        return encodeURIComponent(userInput);
}

function launchSearch(){
    if (document.getElementById("inputSearchVO").value != ""){
        var processedString = inputUser();
	
	var array = new Array();
	if(localStorage.getItem("array") != null ) array = JSON.parse(localStorage.getItem("array"));

	if(array.length == 10)array.shift();
	array.push(processedString);
	localStorage.setItem("array", JSON.stringify(array));

	showResult (processedString);
    }
}

function showResult (processedString){
	var url = sServer +"?q=" + processedString; 
	chrome.tabs.create({"url": url});
}

function doSearchOnEnter(){
    if (event.keyCode== 13)
        launchSearch();
}

function actionSelect(sel){
	var val = sel.value.toLowerCase();
	showResult (val);
}

function onLoadAction(){
	var myHistory = "";
	var array = new Array();
	if(localStorage.getItem("array") != null ) 
		array = JSON.parse(localStorage.getItem("array"));
	else
		document.getElementById('history').style.display = 'none';
	for(var i=array.length-1; i >=0 ; i--) 
		myHistory += "<option value='"+array[i]+"'>"+array[i]+"</option>";
	document.getElementById("history").innerHTML = myHistory;
}
