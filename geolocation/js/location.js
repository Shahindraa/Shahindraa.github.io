let elLocate = docmumet.getElementById("btnLocate")
elLocate.addEventListener("click", function(){
   

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = do.getElementById("lat")
            let elLong = document.getElementById("long")
            elLat.innerHTML = "Latitude: " + position.coords.latitude
            elLong.innerHTML = "'Longitude " + position.coords.longitude
        })
    } else {
        alert("Geolocation is not supported!")
    }
})