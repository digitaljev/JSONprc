// checking to see if the browser is compatible (for IE8 and before)
// If it is, create a standard XmlHttp request, else use a Microsoft ActiveXobject request
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} 
//    else {
//    request = new ActiveXObject("Microsoft.XMLHTTP");
//}

// creating an event handler to monitor the status of the request
// checking if the request is successful by checking variables (.status and .readyState)
// that the server returns. If it does, then proceded with outputing the links.

request.open("GET", "data.json");
request.onreadystatechange = function() {
    if ((request.status === 200) && (request.readyState === 4)) {
        
        // parsing the JSON data to turn it into a JS object and be read   
        // responseTest is the variable that AJAX stores its request in (as a string). Here
        // the variable is being requested by the event handler and being parsed
        // by the inbuilt JSON.parse function into a JS object.
        var info = JSON.parse(request.responseText);
        
        // looping through the data.json links and updating the HTML
        // empty variable to hold the output
        var output = "";

        // A nested FOR loop to first itereate through each array element
        // and then each object in the array
        // An if statement is used to check that the data is our own.
        for (var i = 0; i <= info.links.length; i++) {

            for(var key in info.links[i]) {

                if(info.links[i].hasOwnProperty(key)) {

                    output += '<li>' + '<a href = "' + info.links[i][key] + '">' + key +                            '</a>' + '</li>';
                } // hasOwnProperty check to see if data is our own
            } // for each object
        } // for each array element
        
        var update = document.getElementById("links");
        update.innerHTML = output;
    }
};
// send request to the server. If the request is successful, then the event handler is called and the rest of the function procedes.
request.send();