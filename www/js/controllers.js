'use strict';



angular.module('starter.controllers', ['ngCordova','ngFileSaver', 'filereader'])
.run(function($rootScope) {
    $rootScope.test = new Date();
})


/**
 *
 * App Ctrl
 *
 */

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
    $scope.number = '' ;
}

})

/*=====  End of App Ctrl  ======*/








/*==================================
=            Login Ctrl            =
==================================*/

.controller('LoginCtrl', function($scope,$stateParams, $timeout,$location,
                                   ionicMaterialMotion, ionicMaterialInk, loginService) {
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

loginService.login().then(function(response)
{
   console.log(response); 
});

    ionicMaterialInk.displayEffect();
})




/*=====  End of Login Ctrl  ======*/






/*=================================
=            Main Ctrl            =
=================================*/

.controller('MainCtrl',['$scope','$stateParams','$timeout','$location', 'ionicMaterialMotion', 'ionicMaterialInk','loginService','FileSaver','Blob', '$window','FileReader','$http' ,'blob' ,'$rootScope' , '$cordovaFile',  function($scope,$stateParams, $timeout,$location, ionicMaterialMotion, ionicMaterialInk, loginService,FileSaver,Blob, $window,FileReader,$http,blob,$rootScope , $cordovaFile) {

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
        document.addEventListener('deviceready', function () {

        $cordovaFile.createFile(cordova.file.applicationStorageDirectory, "text.txt", true)
      .then(function (success) {
       alert("Create file" + success) ; 
      }, function (error) {
        alert("Create file error " + error);
      });

$cordovaFile.writeFile(cordova.file.applicationStorageDirectory, "text.txt", txt , true)
      .then(function (success) {
        alert( " Write Success " + success ); 
      }, function (error) {
        alert( " error Success " + success );
      });

  }) 
     var data = new Blob([txt], { type: 'application/json;charset=utf-8'  });
        //  FileSaver.saveAs(data, 'text.txt'); 
      
     
    }
    
       
}])




/*=====  End of Main Ctrl  ======*/






/*===================================
=            Main Ctrl 1            =
===================================*/

.controller('MainCtrl1',['$scope','$stateParams','$timeout','$location', 'ionicMaterialMotion', 'ionicMaterialInk','loginService','FileSaver','Blob', '$window','FileReader','$http' ,'blob' ,'$rootScope','$cordovaFile', function($scope,$stateParams, $timeout,$location, ionicMaterialMotion, ionicMaterialInk, loginService,FileSaver,Blob, $window,FileReader,$http,blob,$rootScope,$cordovaFile) {

      $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
  document.addEventListener('deviceready', function () {
    $cordovaFile.readAsText(cordova.file.applicationStorageDirectory , "text.txt") 
      .then(function (success) {
         
         alert("readFile " + success) ;       
        var res =  JSON.parse(success)
        alert(res);
        $scope.obj  = res ; 

      }, function (error) {
          alert("readFileerror " + error) ; 
      });

});


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


/*=====  End of Main Ctrl 1  ======*/



/*====================================
=           Debtor Ctrl            =
====================================*/

.controller('DebtorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,loginService,$ionicLoading) {
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

   
      $ionicLoading.show({
          template: 'Loading...'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

      $timeout(function() {
         
     loginService.GetCustomers().then(function(response)
      {

        $ionicLoading.hide(); 
        $scope.hide = function(){
       $ionicLoading.hide();
      };

    $scope.response = response; 
    console.log(response);
   })
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();



 

})










/*=====  End of Debtor Ctrl  ======*/




/*====================================
=            Service Ctrl            =
====================================*/

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
/*=====  End of Service Ctrl  ======*/





/*====================================
=            Gallery Ctrl            =
====================================*/

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

/*=====  End of Gallery Ctrl  ======*/






/*=================================
=            FACTORIES            =
=================================*/

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
                            // console.log(txt);           
                           // var data = new Blob([txt], { type: 'application/json;charset=utf-8'  });
                         return txt ;            
          }
    }
}])
.factory('loginService',['testService' , 'Response' ,   function(testService,Response) {
  return {
           login : function() 
           { 
               var loginResponse =  testService.HelloWorld().then(function(response)
               {
                       return Response.response(response); 
               });
                  return loginResponse ;
             },
           GetCustomers : function()
           {
                 var GetCustomer_res =  testService.GetCustomer().then(function(response){
                       return Response.response(response); 
                 });
                return GetCustomer_res ; 
           }
}
}])
.factory('Response',function(){
  return {
           response : function(response)
       {
                      var res2 = JSON.stringify(response);
                      var res3 = res2.replace("diffgr:diffgram", "key");
                      var res4 = JSON.parse(res3);
                       var res5 = res4.key.NewDataSet;                                 
                         return res5 ;
      }
}});
/*=====  End of FACTORIES  ======*/