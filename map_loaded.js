window.onload = function() {
    function receiveMessage(e) {
        console.log(e);
        if (e.origin === 'https://www.petroninja.com') {
            if (e.data.action === 'MAP_IS_LOADED') {
                console.log('Embedded map is loaded!');
                
                // put the code you want executed on map load here
            }
        }
    }
    
    window.addEventListener('message', receiveMessage);
};
