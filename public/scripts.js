$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        document.getElementById('locationStatus').textContent = 'Geolocation is not supported by your browser.';
    }
});

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
}

function errorCallback(error) {
    // Handle potential errors (e.g., user denied permission, location unavailable)
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationStatus').textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationStatus').textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('locationStatus').textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationStatus').textContent = "An unknown error occurred.";
            break;
    }
}
