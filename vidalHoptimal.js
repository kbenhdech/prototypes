var sServer ="http://localhost:8082/search.html";

function inputUser(){
	var userInput = document.getElementById("inputSearch").value;
        return encodeURIComponent(userInput);
}

function launchSearch(){
    if (document.getElementById("inputSearch").value != ""){
        var processedString = inputUser();
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
}
