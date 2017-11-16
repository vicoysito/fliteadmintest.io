'use strict'

function LoginCtrl($scope, $state, $cookies,CONFIG, LOGIN_SERVICE,TOKEN_SERVICE,$timeout) {


  console.info("DOBLE CHECK::",$cookies.getObject("flt"));


  if($cookies.getObject("flt")){
      checkSessionAlive($cookies.getObject("flt"));
  }


  /*=====================================
  =            Template vars            =
  =====================================*/

  $scope.template = {};
  $scope.template.tit_main = "ATM Placement Program";
  $scope.template.logoname = "Flite";
  $scope.template.titleform = "Flite Banking Center";
  $scope.template.description = "Elit eiusmod laborum elit";
  $scope.template.description += "in ullamco cillum et velit. Proident exercitation eiusmod mollit";


  /*=====  End of Template vars  ======*/

  /*===================================
  =            Server vars            =
  ===================================*/

  //prod
  $scope.user = {"fa":CONFIG.USER_APP_KEY};
  //test
  //$scope.user = {"fa":CONFIG.USER_APP_KEY,"username":"peters@example.com","password":"password"};
  $scope.token_sent = false;
  $scope.haserror = false;
  $scope.put_token = false;
  $scope.srv_message = "";

  /*=====  End of Server vars  ======*/


  /*===================================
  =            CONNECTIONS            =
  ===================================*/

  /*----------  LOGIN PROMISE METHODS   ----------*/

  function loginsuccess(data) {
    $scope.srv_message = data.message;
    $scope.token_sent = true;
    $scope.put_token = true;
    console.info(data);
    checkmessages($scope);

    //$scope.token_sent = true;
    //var expireDate = new Date();
    //expireDate.setDate(expireDate.getDate() + 1);
  }

  function displayerror(error) {
    $scope.haserror = true;
    $scope.srv_message = error.data.message;
    console.info("ERROR:",error);
    checkmessages($scope);
  }




  function checkmessages($scope){
    $timeout(function(){
      $scope.haserror = false;
      $scope.token_sent = false;
      $scope.srv_message ="";
    },6000)
  }


  function tokensuccess(data){
    console.info(data);
    var expireDate = new Date();
    expireDate.setDate(expireDate.getMinutes() + 5);

    $cookies.putObject("flt",data,{"expire":expireDate});
    $state.go(data.gateway);
  }


  /*----------  PROMISE LOGIN  ----------*/

 


$scope.enter = function() {

    LOGIN_SERVICE.login($scope.user, loginsuccess, displayerror);
    
  }

$scope.access = function(){
      TOKEN_SERVICE.check($scope.user, tokensuccess, displayerror);

}  



function checkSessionAlive(session){
    TOKEN_SERVICE.check(session, tokensuccess);
}

  /*=====  End of CONNECTIONS  ======*/

}

angular.module('AdminUI').controller('LoginCtrl', LoginCtrl);