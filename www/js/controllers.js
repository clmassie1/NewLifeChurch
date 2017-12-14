angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, $stateParams, $http){
  
  
  $scope.result = [];
  $http.get('https://calm-mountain-31219.herokuapp.com/calendar')
    .success(function(data){
     
     // console.log('test', data); // for browser console
      $scope.result = data; // for UI
      console.log('data sus', $scope.result);
    })
    .error(function(data){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });

    
})


.controller('DashCtrl', function($scope, $stateParams, $http){
  
  
    $scope.result = [];
    $http.get('https://calm-mountain-31219.herokuapp.com/audios.json')
      .success(function(data){
       
       // console.log('test', data); // for browser console
        $scope.result = data; // for UI
        console.log('data sus', $scope.result);
      })
      .error(function(data){
        console.log('data error');
      })
      .then(function(result){
        things = result.data;
      });

    })

    