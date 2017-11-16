/**
 * AdminUI - Responsive Admin Theme
 *
 */
(function () {
    var app = angular.module('AdminUI', [
        'ui.router',                   // Routing
        'oc.lazyLoad',                // ocLazyLoad
        'ui.bootstrap',               // Ui Bootstrap
        'ngCookies',
        'ngResource'
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad
