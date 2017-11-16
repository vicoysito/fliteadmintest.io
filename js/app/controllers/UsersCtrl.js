'use strict';

function UsersCtrl($scope,$state,$cookies,USER_SERVICE){

	$scope.user = $cookies.get("flt");

	console.info("USER::",$scope.user);

	if($scope.user){
		USER_SERVICE.load($scope.user,function(data){
		console.info("DATA",data);
		$scope.users = data.users;
		},function(error){
			invalidTk($scope,$state,error);
		})
	}else{
		$state.go("login");
	}

	


	function invalidTk($scope,$state,error){
		console.info("Error:",error.message);
		if(error.status ==401){
			$state.go("login");
			$cookies.remove("flt");
		}
	}





}



angular.module('AdminUI').controller('UsersCtrl', UsersCtrl);