function launchSearch(){
    if (document.getElementById("inputSearchVO").value != ""){
        var userInput = document.getElementById("inputSearchVO").value;
        var processedString = encodeURIComponent(userInput);
		var sServer ="http://www.vidalonline.com/medecin/search.html";
    	var url = sServer +"?q=" + processedString+"&&intcmp=widget_v1" ; 
    	window.open(url);
    }
}

function doSearchOnEnter(){
    if (window.event.keyCode== 13){
        launchSearch();
    }
}
