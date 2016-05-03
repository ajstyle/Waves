'use strict';



angular.module('starter.controllers', ['ngCordova','ngFileSaver', 'filereader','ngAnimate','chart.js'])
.run(function() {
   
})


/**
 *
 * App Ctrl
 *
 */

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,$location) {
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
console.log($location.$$path);
if($location.$$path == "/app1/gallery")
{
      
}
})

/*=====  End of App Ctrl  ======*/








/*==================================
=            Login Ctrl            =
==================================*/

.controller('LoginCtrl', function($scope,$stateParams, $timeout,$location,
                                   ionicMaterialMotion, ionicMaterialInk,Mobile,blob) {
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
 
   

   
  $scope.getMobile = function(mobile)
    {                  $scope.mobile = angular.copy(mobile);
                         $scope.output = Mobile;
                        
                         $scope.output.text = $scope.mobile ;
                      
                   
    } 


  
    

})




/*=====  End of Login Ctrl  ======*/






/*=================================
=            Main Ctrl            =
=================================*/

.controller('MainCtrl',['$scope','$stateParams','$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','testService' ,'FileSaver','Blob', '$window','FileReader','$cordovaFile','Response','blob','Mobile','$location','Services'  ,  function($scope,$stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, testService,FileSaver,Blob, $window,FileReader,$cordovaFile,Response,blob,Mobile,$location,Services)
{
     
        $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');


    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();



 $scope.blob = blob;         
    $scope.output = Mobile;
$scope.Mobile   = $scope.output.text;
console.log($scope.Mobile);
          
$scope.register = function(user) {
                   
      
$scope.master = angular.copy(user);
           $scope.loginid = $scope.master.user.loginid;
           $scope.branchid = $scope.master.user.branchid;
           $scope.userid = $scope.master.user.userid;
            $scope.password = $scope.master.user.password;
            $scope.Mobile   = $scope.output.text;
            $scope.id       =  $scope.output.id ;
         
            testService.HelloWorld($scope.loginid,$scope.branchid,$scope.userid,$scope.password,$scope.Mobile,"1234").then(function(response){
   
    var response = Response.response(response); 
    var res =  response["login"];
                            console.log(res);

    //Services for Debtors Creditors

$scope.service = Services;
    $scope.service.login = res ;

 if(res["ip"] == "0")
        {
              alert(res["us"]);
            $location.path("/app/register"); 
        }
         else
         {
             var txt = blob.register() ; 
             console.log(txt);
        document.addEventListener('deviceready', function () {

        $cordovaFile.createFile(cordova.file.applicationStorageDirectory, "text.txt", true)
      .then(function (success) {
      
      }, function (error) {
       
      });

$cordovaFile.writeFile(cordova.file.applicationStorageDirectory, "text.txt", txt , true)
      .then(function (success) {
       
      }, function (error) {
       
      });

  }) 
     var data = new Blob([txt], { type: 'application/json;charset=utf-8'  });
        //  FileSaver.saveAs(data, 'text.txt'); 
            $location.path("/app1/gallery"); 
         }

  });
   
    }
    
}])




/*=====  End of Main Ctrl  ======*/






/*===================================
=            Main Ctrl 1            =
===================================*/

.controller('MainCtrl1',['$scope','$stateParams','$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','testService' ,'FileSaver','Blob', '$window','FileReader','$cordovaFile','Response','blob','Mobile','$location','Services'  ,  function($scope,$stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, testService,FileSaver,Blob, $window,FileReader,$cordovaFile,Response,blob,Mobile,$location,Services){

      $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
  



document.addEventListener('deviceready', function () {
              
    $cordovaFile.readAsText(cordova.file.applicationStorageDirectory , "text.txt") 
      .then(function (success) {
         
        var res =  JSON.parse(success)
     
        $scope.obj  = res ; 
          $scope.output = Mobile;
        
         
           $scope.register = function(password)
{
                  $scope.password = angular.copy(password);
                        
                 // alert($scope.password);

              var res =  JSON.parse(success)
              $scope.obj  = res ; 
                 

              
           $scope.loginid =  $scope.obj.loginid ;
             $scope.branchid =  $scope.obj.branchid ;
             $scope.userid =  $scope.obj.userid ;
             $scope.Mobile   = "917877361402";
            $scope.password1  = $scope.password ;
            $scope.id       =  $scope.output.id ;
          

                  

             testService.HelloWorld($scope.loginid,$scope.branchid,$scope.userid,$scope.password1,$scope.Mobile,"1234").then(function(response){
                    var response = Response.response(response); 
                   
                   ///  alert(response);
                    var res1 =  response["login"];

                        // alert(res.ip);
                        $scope.service = Services;
                $scope.service.login = res1 ;
                alert($scope.service.login);
                  

                    if(res1.ip == "0")
                   {
                     alert(res.us);
                      $location.path("/app/registertxt"); 
                  }
                   else
                  { 
                      $location.path("/app1/gallery");                           

                   }
         

        })
     }
      }, function (error) {
         
      });

});











       
       
}])


/*=====  End of Main Ctrl 1  ======*/



/*====================================
=           Debtor Ctrl            =
====================================*/

.controller('DebtorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
         alert( $scope.ip);
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);



      $timeout(function() {
         
     testService.GetCustomer($scope.ip , $scope.db , $scope.us , $scope.ps).then(function(response)
      {
         
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
        $scope.hide = function(){
       $ionicLoading.hide();
      };

        var response1 = Response.response(response); 
    $scope.response = response1; 
    $scope.responseSearch = $scope.response ; 
    console.log($scope.responseSearch);
    $scope.$watch('search', function(val)
    { 
        
        console.log($filter('filter')($scope.responseSearch, val));
        $scope.response = $filter('filter')($scope.responseSearch, val); // items return for api after search if array is empty
       
        if($filter('filter')($scope.responseSearch, val).length == 0){ // item are empty
           $scope.nodata = true;
        }
        else{
          $scope.nodata = false;   
        }
    });


   })
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Debtor Ctrl  ======*/






/*====================================
=           Creditor Ctrl            =
====================================*/


.controller('CreditorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
         alert( $scope.ip);
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);



      $timeout(function() {
         
     testService.GetSupplier($scope.ip , $scope.db , $scope.us , $scope.ps).then(function(response)
      {
         
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
        $scope.hide = function(){
       $ionicLoading.hide();
      };

        var response1 = Response.response(response); 
    $scope.response = response1; 
    $scope.responseSearch = $scope.response ; 
    console.log($scope.responseSearch);
    $scope.$watch('search', function(val)
    { 
        
        console.log($filter('filter')($scope.responseSearch, val));
        $scope.response = $filter('filter')($scope.responseSearch, val); // items return for api after search if array is empty
       
        if($filter('filter')($scope.responseSearch, val).length == 0){ // item are empty
           $scope.nodata = true;
        }
        else{
          $scope.nodata = false;   
        }
    });


   })
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();



 

})


/*=====  End of Creditor Ctrl  ======*/


/*====================================
=           Other Ctrl            =
====================================*/


.controller('OtherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
         alert( $scope.ip);
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);



      $timeout(function() {
         
     testService.GetOtherLedgers($scope.ip , $scope.db , $scope.us , $scope.ps).then(function(response)
      {
         console.log(response);
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
        $scope.hide = function(){
       $ionicLoading.hide();
      };

        var response1 = Response.response(response); 
    $scope.response = response1; 
    $scope.responseSearch = $scope.response ; 
    console.log($scope.responseSearch);
    $scope.$watch('search', function(val)
    { 
        
        console.log($filter('filter')($scope.responseSearch, val));
        $scope.response = $filter('filter')($scope.responseSearch, val); // items return for api after search if array is empty
       
        if($filter('filter')($scope.responseSearch, val).length == 0){ // item are empty
           $scope.nodata = true;
        }
        else{
          $scope.nodata = false;   
        }
    });


   })
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Other Ctrl  ======*/



/*====================================
=         Cheque Ctrl            =
====================================*/


.controller('ChequeCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
         alert( $scope.ip);
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);



      $timeout(function() {
         
     testService.GetPDC($scope.ip , $scope.db , $scope.us , $scope.ps , " " , " ").then(function(response)
      {
         console.log(response);
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
        $scope.hide = function(){
       $ionicLoading.hide();
      };

        var response1 = Response.response(response); 
    $scope.response = response1; 
    $scope.responseSearch = $scope.response ; 
    console.log($scope.responseSearch);
    $scope.$watch('search', function(val)
    { 
        
        console.log($filter('filter')($scope.responseSearch, val));
        $scope.response = $filter('filter')($scope.responseSearch, val); // items return for api after search if array is empty
       
        if($filter('filter')($scope.responseSearch, val).length == 0){ // item are empty
           $scope.nodata = true;
        }
        else{
          $scope.nodata = false;   
        }
    });


   })
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Cheque Ctrl  ======*/



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

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion,connection,$location) {
  

  

  
    
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
   

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
     $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  // Simulate async data update
  $timeout(function () {
    $scope.data = [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ];
  }, 3000);


})

/*=====  End of Gallery Ctrl  ======*/






/*=================================
=            FACTORIES            =
=================================*/

.factory('blob',['$rootScope' , 'FileSaver' , '$window',function($rootScope , FileSaver,$window) {
    var messages = {};
     var user = {
             mobileno:'',
             loginid: '',
             branchid: '',
             userid : ''
        };
    $rootScope.isFBLoggedin = false; 
    return {
          register : function()
          {
            
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
}})

.factory('connection', [function () {
  

  return { 
            checkconnection: function()
            {
                 var networkState = navigator.connection.type;

                 var states = {};
                 states[Connection.UNKNOWN]  = 'Unknown connection';
                             states[Connection.ETHERNET] = 'Ethernet connection';
                 states[Connection.WIFI]     = 'WiFi connection';
                 states[Connection.CELL_2G]  = 'Cell 2G connection';
                 states[Connection.CELL_3G]  = 'Cell 3G connection';
                 states[Connection.CELL_4G]  = 'Cell 4G connection';
                 states[Connection.CELL]     = 'Cell generic connection';
                 states[Connection.NONE]     = 'No network connection';
               
                  return states[networkState];
            }

  };
}])

.factory('Mobile', function () {
  

 var object = {};
  object.text = "";
  object.id = "";

  return object;

 
})

.factory('Services', function () {
  

 var object = {};
  object.login = "";
  

  return object;

 
})






/*=====  End of FACTORIES  ======*/