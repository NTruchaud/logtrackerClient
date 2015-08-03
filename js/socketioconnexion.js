// Connexion à socket.io
var socket = io.connect('http://localhost:3000');

    // Quand un nouveau client se connecte, on affiche l'information
    socket.on('client_connected', function() {
        $('#zone_log').prepend('<p>Un client s\'est connecté !</p>');
    })

    // On affiche quand un device est plug / unplug et on affiche son ID
    socket.on('device-plugged', function(device) {
       $('#zone_devices').prepend('<p>' + device + '</p>');
   })

    socket.on('device-unplugged', function(device) {
        $('#zone_devices').prepend('<p>' + device + '</p>');
    })

    // On affiche les logs du adb logcat
    socket.on('logcat', function(log) {
        $('#zone_deviceLog').prepend('<p>' + log + '</p>');
    })
