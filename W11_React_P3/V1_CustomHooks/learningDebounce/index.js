let currentClock;
function searchBackend(){
    console.log("request sent to backend");
}

function debounceSearchBackend(){
    // Whenever I am called I will start a clock of 30ms and during this time If I get called again then restart the timer for 30ms
    clearTimeout(currentClock);
    currentClock = setTimeout(searchBackend,5000); //start a clock

}


// So out debounced is called so many times as user types 

debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();