'use strict';

var CONFIG = {
	  "USER_APP_KEY":"dXNlcnNfY2xpZW50",
}

var URLS = {
  "CONTEXT_SERVER":"http://localhost:8080/",
  "SERVER":"flitelogin/"
}

angular.module('AdminUI').constant('URLS', URLS);
angular.module('AdminUI').constant('CONFIG', CONFIG);
