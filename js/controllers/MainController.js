app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Log Tracker WebApp';
  /*$scope.clientConnected = socket.on('client_connected', function() {
          $('#zone_log').prepend('<p>Un client s\'est connecté !</p>');
        });
  $scope.devicePlugged = socket.on('device-plugged', function(device) {
       $('#zone_devices').prepend('<p>' + device + '</p>');
   });
  $scope.deviceUnplugged = socket.on('device-plugged', function(device) {
       $('#zone_devices').prepend('<p>' + device + '</p>');
   });
  $scope.logcat = socket.on('logcat', function(log) {
        $('#zone_deviceLog').prepend('<p>' + log + '</p>');
    });*/
}]);
