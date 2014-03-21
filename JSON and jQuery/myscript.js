// make sure the document has finished loading, by using jquery ready function
console.log("hi");
$(document).ready(function(){
    // getting the JSON data. Passing the location of the file and the variable you want
    // to store the data into (info in this case)
    // This parses the data automatically for you.
    $.getJSON("data.json", function(info) {
              
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
    
    }); // getJSON
}); // ready

        
        
   