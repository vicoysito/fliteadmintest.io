function USER_SERVICE($resource,URLS){

          return $resource(URLS.CONTEXT_SERVER + URLS.SERVER+"users/:endpoint", null, {
              load:{method:"POST",params:{"endpoint":"list"}},
              save: {method: 'POST'},
              update: {method: 'PUT'},
          })

}


function LOGIN_SERVICE($resource,URLS){
  return $resource(URLS.CONTEXT_SERVER + URLS.SERVER+"login", null, {
      login: {method: 'POST'},
  })
}

function TOKEN_SERVICE($resource,URLS){
  return $resource(URLS.CONTEXT_SERVER + URLS.SERVER+"check_token", null, {
      check: {method: 'POST'},
  })
}


angular.module('AdminUI').service('USER_SERVICE', USER_SERVICE);
angular.module('AdminUI').service('LOGIN_SERVICE', LOGIN_SERVICE);
angular.module('AdminUI').service('TOKEN_SERVICE', TOKEN_SERVICE);
