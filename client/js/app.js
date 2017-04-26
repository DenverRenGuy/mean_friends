angular.module('app', ['appDepend', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        console.log('Initializing App.js')
        $routeProvider
            .when('/', {
                templateUrl: 'partials/_welcome.html'

            })
    }
]);
angular.module('appDepend', []);
