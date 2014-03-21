// call the dataHandler function and pass the data into the "info" parameter
// this parameter can now be accessed for the JSON data
function dataHandler(info){
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



        
