'use strict';

 


angular.module('starter.controllers', ['ngCordova','ngFileSaver', 'filereader'])
.run(function($rootScope) {
    $rootScope.test = new Date();
})

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
 $scope.clearFabs = function() {
    $scope.number = '' ;
}

})



.controller('LoginCtrl', function($scope,$stateParams, $timeout,$location, ionicMaterialMotion, ionicMaterialInk, loginService) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
/*
loginService.login().then(function(response)
{
       var ip = response.login.ip;
    
         if(ip != null)
         {
            console.log("Ip");
            $location.path("app/register");
         }
         else
         {
              console.log("NULL");
            $location.path("app/login");
         }
    
});
*/
    ionicMaterialInk.displayEffect();
})





.controller('MainCtrl',['$scope','$stateParams','$timeout','$location', 'ionicMaterialMotion', 'ionicMaterialInk','loginService','FileSaver','Blob', '$window','FileReader','$http' ,'blob' ,'$rootScope' ,  function($scope,$stateParams, $timeout,$location, ionicMaterialMotion, ionicMaterialInk, loginService,FileSaver,Blob, $window,FileReader,$http,blob,$rootScope) {

      $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');


    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

          $scope.blob = blob;
      
$scope.register = function($rootScope) {
                   
         
         var txt = blob.register() ; 
       
     var data = new Blob([txt], { type: 'application/json;charset=utf-8'  });
          FileSaver.saveAs(data, 'text.txt'); 
      
     
    }
       
       
}])


.controller('MainCtrl1',['$scope','$stateParams','$timeout','$location', 'ionicMaterialMotion', 'ionicMaterialInk','loginService','FileSaver','Blob', '$window','FileReader','$http' ,'blob' ,'$rootScope' ,  function($scope,$stateParams, $timeout,$location, ionicMaterialMotion, ionicMaterialInk, loginService,FileSaver,Blob, $window,FileReader,$http,blob,$rootScope) {

      $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');


    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

     $http.get("text.txt")
  .then(function(response) {
      $scope.myWelcome = response.data;
     $scope.obj = $scope.myWelcome ;
      
       
     
    });
       
       
}])
















.factory('blob',['$rootScope' , 'FileSaver' , '$window',function($rootScope , FileSaver,$window) {
  
    var messages = {};
     var user = {
             loginid: '',
             branchid: '',
             userid : ''
        };
    $rootScope.isFBLoggedin = false; 
        
    return {
          register : function()
          {
            console.log("Amit");
            
        
            console.log("User Click " + this.user);
                             var txt =  this.user
              

                var val = {
                             text: JSON.stringify(txt)
                           };
            
                              
                         var txt =  val.text;
                             console.log(txt);           
                           
                            var data = new Blob([txt], { type: 'application/json;charset=utf-8'  });
                         
                          
                         return data ;            
          }
   
         
        
    }
}])



.factory('loginService',['testService' ,  function(testService) {
 
  return {
           login : function() 
           { 
               
              

               var loginResponse =  testService.HelloWorld().then(function(response)
               {
                     
                      //$scope.response = response;
    
                      var res2 = JSON.stringify(response);
                      var res3 = res2.replace("diffgr:diffgram", "key");
   
                      var res4 = JSON.parse(res3);
                       var res5 = res4.key.NewDataSet;                                 
                         return res5 ;
                      

               });
         
                  return loginResponse ;
             }
           
          
}

         


}])





.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})


.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

 
;