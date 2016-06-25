'use strict';



angular.module('starter.controllers', ['ngCordova','ngFileSaver', 'filereader','ngAnimate','chart.js','pdf'])
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
   $scope.enable = false ; 

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
      $scope.hide = "false"
}
else
{
   $scope.hide = "true"
}
})

/*=====  End of App Ctrl  ======*/








/*==================================
=            Login Ctrl            =
==================================*/

.controller('LoginCtrl', function($scope,$stateParams, $timeout,$location,
                                   ionicMaterialMotion, ionicMaterialInk,Mobile,$cordovaFile,blob) {
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
                                  var mobile     =  $scope.mobile ;
                        
                           console.log(mobile);
                         $scope.output = Mobile;
                        
                         $scope.output.text = $scope.mobile ;
                       
   
                document.addEventListener('deviceready', function () {
               
                 $cordovaFile.createFile(cordova.file.applicationStorageDirectory, "mobile.txt", true)
                .then(function (success) {

                }, function (error) {
                     
               });
                $cordovaFile.writeFile(cordova.file.applicationStorageDirectory, "mobile.txt", mobile , true)
                   .then(function (success) {
                
           }, function (error) {
                 

              });

                


             })
    } 

})




/*=====  End of Login Ctrl  ======*/






/*=================================
=            Main Ctrl            =
=================================*/

.controller('MainCtrl',['$scope','$stateParams','$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','testService' ,'FileSaver','Blob', '$window','FileReader','$cordovaFile','Response','blob','Mobile','$location','Services'  ,  'connection' ,'$ionicLoading' , '$ionicPopup' , 'loginid' , function($scope,$stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, testService,FileSaver,Blob, $window,FileReader,$cordovaFile,Response,blob,Mobile,$location,Services, connection,$ionicLoading,$ionicPopup,loginid)
{
     
        $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
    $scope.enable = false ;

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

 
 $scope.blob = blob;  
console.log(blob);
    $scope.output = Mobile;
    $scope.login = loginid ; 

$scope.Mobile   = $scope.output.text;
console.log($scope.Mobile);
          
$scope.register = function(user) {
  

   
     $ionicLoading.show({
          template: '<ion-spinner icon="spiral"></ion-spinner>',
            hideOnStateChange : 'true',
          noBackdrop : 'true'
       });
      
              
            
                  user.mobileno = $scope.Mobile ;
               $scope.master = angular.copy(user);
                               
              
           console.log(user);
           $scope.loginid = $scope.master.user.loginid;
               $scope.login.id = $scope.loginid
              $scope.branchid = $scope.master.user.branchid;
           $scope.userid = $scope.master.user.userid;
            $scope.password = $scope.master.user.password;
            $scope.Mobile   = $scope.output.text;
            $scope.id       =  $scope.output.id ;
                            
            testService.HelloWorld($scope.loginid,$scope.branchid,$scope.userid,$scope.password,$scope.Mobile,"1234").then(function(response){
   
    var response = Response.response(response); 
    console.log(response );
    var res =  response["login"];
                            console.log(res);

    //Services for Debtors Creditors

$scope.service = Services;
    $scope.service.login = res ;

 var txt = blob.register() ; 
       

 if(res["ip"] == "0")
        {
         
           $ionicLoading.hide();
              $ionicPopup.alert({
                title : 'Error',
                template : res["us"]
              });
            $location.path("/app/register"); 
        }
         else
         {
        
              $ionicLoading.hide();
             var txt = blob.register() ; 
            
        document.addEventListener('deviceready', function () {

        $cordovaFile.createFile(cordova.file.applicationStorageDirectory, "text.txt", true)
      .then(function (success) {
       
      }, function (error) {
         
      });

$cordovaFile.writeFile(cordova.file.applicationStorageDirectory, "text.txt", txt , true)
      .then(function (success) {
       
      }, function (error) {
         alert(" error write file"+success);

      });

  }) 
     var data = new Blob([txt], { type: 'application/json;charset=utf-8'  });
        //  FileSaver.saveAs(data, 'text.txt'); 
            $location.path("/app/gallery"); 
         }

  });
          
   
    }
    
}])




/*=====  End of Main Ctrl  ======*/






/*===================================
=            Main Ctrl 1            =
===================================*/

.controller('MainCtrl1',['$scope','$stateParams','$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','testService' ,'FileSaver','Blob', '$window','FileReader','$cordovaFile','Response','blob','Mobile','$location','Services'  , 'connection' , '$ionicLoading' ,'$ionicPlatform', '$ionicPopup' , function($scope,$stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, testService,FileSaver,Blob, $window,FileReader,$cordovaFile,Response,blob,Mobile,$location,Services,connection,$ionicLoading,$ionicPlatform,$ionicPopup){

      $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab('right');
 

  document.addEventListener('deviceready', function () {
$cordovaFile.readAsText(cordova.file.applicationStorageDirectory , "mobile.txt") 
                   .then(function (success) {
                          

                    var res1 =  JSON.parse(success)

               
                      $scope.output = Mobile;
                   
                      $scope.output.mobile = res1 ;
                  
           }, function (error) {
                 alert("error read write file" + error)
              });

})

document.addEventListener('deviceready', function () {
             

    $cordovaFile.readAsText(cordova.file.applicationStorageDirectory , "text.txt") 
      .then(function (success) {
          
        var res =  JSON.parse(success)

        $scope.obj  = res ; 
          
          $scope.output = Mobile;
        
         
           $scope.register = function(password)
{
                  $ionicLoading.show({
          template: '<ion-spinner icon="spiral"></ion-spinner>',
            hideOnStateChange : 'true',
          noBackdrop : 'true'
       });

                         
                  $scope.password = angular.copy(password);
                        
               

              var res =  JSON.parse(success)
              $scope.obj  = res ; 
                 

              
           $scope.loginid =  $scope.obj.loginid ;
             $scope.branchid =  $scope.obj.branchid ;
             $scope.userid =  $scope.obj.userid ;
          
             $scope.Mobile   = $scope.output.mobile;
         
            $scope.password1  = $scope.password ;
            $scope.id       =  $scope.output.id ;
          

                  

             testService.HelloWorld($scope.loginid,$scope.branchid,$scope.userid,$scope.password1,$scope.Mobile,"1234").then(function(response){
                    var response = Response.response(response); 
                   
               
                    var res1 =  response["login"];
                   
                        $scope.service = Services;
                $scope.service.login = res1 ;
             
                    if(res1.ip == "0")
                   {  $ionicLoading.hide();
                       $ionicPopup.alert({
                         title : 'Error',
                         template : res1.us
                        });         
                      $location.path("/app/registertxt"); 
                  }
                   else
                  { 
                      $ionicLoading.hide();
                      $location.path("/app/gallery");                           

                   }
         

        })
           
     }
      }, function (error) {
          alert(" error text read write file"+error);
      });
     
});











       
       
}])


/*=====  End of Main Ctrl 1  ======*/



/*====================================
=           Debtor Ctrl            =
====================================*/

.controller('DebtorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;

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

       
          
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({

          templateUrl: 'templates/loader.html',
            hideOnStateChange : 'true',
          noBackdrop : 'true'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

      $scope.id = function(data,name)
      {
         $scope.output = transid;

          $scope.output.transid = data ;
          $scope.output.name = name ;
      }


      $timeout(function() {
         
     testService.GetCustomer("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430").then(function(response)
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


.controller('CreditorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      $scope.hide  = false ; 
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
        
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
            hideOnStateChange : 'true',
          noBackdrop : 'true'
       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

$scope.id = function(data,name)
      {
         $scope.output = transid;
          $scope.output.transid = data ;
           $scope.output.name = name ;
      }

      $timeout(function() {
         
  testService.GetSupplier("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430").then(function(response)
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


.controller('OtherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
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
  
          $scope.id = function(data,name)
      {
         $scope.output = transid;

          $scope.output.transid = data ;
          $scope.output.name = name ;
      }
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
            hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

       $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);



      $timeout(function() {
         
     testService.GetOtherLedgers("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430").then(function(response)
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


.controller('ChequeCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
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
        
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $scope.voucher = function(data)
      {
          $scope.output = voucher;
          $scope.output.voucher = data ;
          
      }
   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });



     
         
     testService.GetPDC("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" , " " , " ").then(function(response)
      {
         console.log(response);
         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Cheque Ctrl  ======*/


/*====================================
=         Receipt Ctrl            =
====================================*/


.controller('receiptCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
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
       $scope.voucher = function(data)
      {
          $scope.output = voucher;
          $scope.output.voucher = data ;
      }
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });



     
         
     testService.GetReceipts("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" , " " , " ").then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Receipt Ctrl  ======*/




/*====================================
=        Inventory Ctrl            =
====================================*/


.controller('inventoryCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
     $scope.id = function(data,name)
      {
         $scope.output = transid;

          $scope.output.transid = data ;
          $scope.output.name = name ;
      }
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
    
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });



     
         
     testService.Getinventory("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430").then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Receipt Ctrl  ======*/


/*====================================
=         Sales Ctrl            =
====================================*/


.controller('SalesCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
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
         
           $scope.voucher = function(data)
      {
         $scope.output = voucher;
          $scope.output.voucher = data ;
       
      }
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });



     
         
     testService. GetSales("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" , "S" ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Sales Ctrl  ======*/




/*====================================
=     Purchase Ctrl            =
====================================*/


.controller('PurchaseCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
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
          $scope.voucher = function(data)
      {
         $scope.output = voucher;
          $scope.output.voucher = data ;
          
      }
          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

   
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });



     
         
     testService.GetPurchase("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" , "P" ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Purchase Ctrl  ======*/

/*====================================
=    Support  Ctrl            =
====================================*/


.controller('SupportCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher,$ionicPopup,Mobile,loginid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.hide  = false ;
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
     $scope.output = Mobile;
$scope.Mobile   = $scope.output.text;


 $scope.login = loginid ;
 
 $scope.login1 = $scope.login.id 


    $scope.register = function(blob)
    {
      $scope.comment = blob.user.comment  ; 

     testService.mySupport($scope.login1 ,$scope.Mobile,  $scope.comment ).then(function(response)
      {
         $ionicPopup.alert({
                title : 'Success',
                template : response
              });


   })
  }

 

})

/*=====  End of  Support Ctrl  ======*/



/*====================================
=     transaction  Ctrl            =
====================================*/


.controller('transactionCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = transid;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid
           $scope.name = $scope.output.name ;

          console.log( $scope.id);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
          $scope.voucher = function(data)
      {
          $scope.output = voucher;
          $scope.output.voucher = data ;

      }
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

   
         
     testService.GetTransaction("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,  $scope.id ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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

 
    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Transaction Ctrl   ======*/








/*====================================
=     transactionCreditor  Ctrl            =
====================================*/


.controller('transactionCreditorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = transid;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid;
          $scope.name = $scope.output.name ;
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

     $scope.voucher = function(data,acc)
      {
         $scope.output = voucher;
          $scope.output.voucher = data ;
           $scope.output.acc = acc ;
      }
         
     
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetTransaction("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,  $scope.id ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Transaction Creditor Ctrl   ======*/




/*====================================
=     transaction Cheque  Ctrl            =
====================================*/


.controller('transactionChequeCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,$cordovaSocialSharing) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = transid;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid;
          console.log( $scope.id);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetTransaction("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,  $scope.id ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();
    
    


 

})

/*=====  End of  Transaction Chqeue Ctrl   ======*/


/*====================================
=     transaction Inventory  Ctrl            =
====================================*/


.controller('transactionInventoryCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher, $cordovaFile,$cordovaFileOpener2,$cordovaSocialSharing) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
   var response1 ; 
    $scope.service = Services;
    $scope.output = transid;

 



 var vm = this;
 // Initialize the modal view.
    

    
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid;
           $scope.name =   $scope.output.name ; 
           $scope.hide = false ;
          console.log( $scope.id);
            $scope.voucher = function(data)
      {
          $scope.output = voucher;
           $scope.output.voucher = data ;
      }
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          template: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
          
        


     testService.GetItemTransaction("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,  $scope.id ).then(function(response)
      { 
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
           console.log(response1);
           $scope.response = response1; 
    $scope.responseSearch = $scope.response ; 
  
    
 
    $scope.doc = function(){
 $ionicLoading.show({
         template: '<div class = "pdfloader"> Creating PDF....</div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });


 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});
console.log(value);
for(var i in response1) {

    var item = response1[i];
  console.log(item);
    
    Inventorydata.accounting.push({ 
        "Date" : item.date,
        "Type"  : item.typ,
        "Receive"  : item.debit ,
        "Issue"    : item.credit , 
        "Balance" : item.balance
       
     });
}



function buildTableBody(data, columns) {
    var body = [[ {text : 'Date', style: 'subheader'}, 
                  {text : 'Type' , style: 'subheader'} ,
                  {text : 'Receive' , style: 'subheader'},
                  {text : 'Issue' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 
                  ]];

    data.forEach(function(row) {
        console.log(row);
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
       console.log( dataRow);
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths: [200, '*', 100, '*','*'],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        }
    };
}
function text(data)
{
  return {
    text : data , style: 'header2'
  }
}
  
var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'Inventory Report', style: 'header1' },
         { text: '', style: 'margin' },
         text(value),

        table(Inventorydata.accounting, ['Date', 'Type' , 'Receive' , 'Issue' , 'Balance'] ),
      
 
    ],
    styles: {
    header: {
      fontSize: 22,
      bold: true,
     alignment: 'center' ,
      
    },
     subheader: {
      fontSize: 14,
      bold: true,
       alignment: 'center' ,
       
    },
    margin:{
      margin: [0, 20, 0, 0],
    },
     header1: {
      fontSize: 16,
      bold: true,
     alignment: 'left' ,
      
    },
   header2: {
      fontSize: 13,
      bold: true,
     alignment: 'center' ,
      
    }
  }
}
 

 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
    
    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
   
      $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", false)
      .then(function (success) {
     
      }, function (error) {
     
      });


    $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/", "inventory.pdf", binaryArray, true)
        .then(function (success) {
           
           
        }, function (error) {
           
    });

     $ionicLoading.hide();

 $cordovaFileOpener2.open(
    './sdcard/waves/inventory.pdf',
    'application/pdf'
  ).then(function() {
   
        }, function(err) {
  
   
  });
});


  
 pdfMake.createPdf(dd).download();

  }
 
$scope.share = function () {

  $cordovaFile.readAsDataURL(cordova.file.externalRootDirectory+"waves/", 'inventory.pdf')
.then(function (data) {
 
$cordovaSocialSharing.shareViaEmail('Inventory Report ', 'Inventory Report', null, null, null, data)
  .then(function(result) {
  
  
  }, function(err) {
    alert(err);
    
  });
 
}, function (error) {
  
});
}

 })
     

  
    ionicMaterialInk.displayEffect();

   })                             

/*=====  End of  Transaction Inventory Ctrl   ======*/




/*====================================
=     transaction Other  Ctrl            =
====================================*/


.controller('transactionOtherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = transid;
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid;
           $scope.name = $scope.output.name ;
         console.log( $scope.id);
          console.log( $scope.id);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetTransaction("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.id ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Transaction Other Ctrl   ======*/



/*====================================
=     Voucher  Ctrl            =
====================================*/


.controller('voucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
           $scope.date  = $scope.output.date;
           $scope.type = $scope.output.typ ;
           $scope.vchno = $scope.output.vchno ;
           
          console.log(  $scope.date);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetAccountingVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,   $scope.voucher ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
   $scope.response = response1; 
     console.log( $scope.response);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Voucher Ctrl   ======*/


/*====================================
=    CreditorvoucherCtrl      =
====================================*/


.controller('CreditorvoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,$location,voucher,transid) {
    // Set Header
    $scope.output = voucher
    var acc =  $scope.output.acc 
      $scope.output1 = transid;
 $scope.name = $scope.output1.name ;
    if(acc == "A")
          {
              $location.url("/app/CreditorAVoucher"); 
          }
          else
          {
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
           $scope.voucher  = $scope.output.voucher;
            
          

          
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetInventoryVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,   $scope.voucher ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 }

})

/*=====  End of Inventory voucher Ctrl   ======*/


.controller('inventoryVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
          console.log($scope.voucher);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetInventoryVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.voucher  ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Inventory voucher Ctrl   ======*/

/*====================================
=    Receipt voucher Ctrl     =
====================================*/


.controller('receiptVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
          console.log($scope.voucher);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetAccountingVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.voucher).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Receipt voucher Ctrl   ======*/

/*====================================
=    Cheque voucher Ctrl     =
====================================*/


.controller('chequeVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
          console.log($scope.voucher);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetAccountingVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.voucher).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Cheque voucher Ctrl   ======*/


/*====================================
=    Purchasevoucher Ctrl     =
====================================*/


.controller('purchaseVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
          console.log($scope.voucher);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetInventoryVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.voucher ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Purchasevoucher Ctrl   ======*/


/*====================================
=    Sale voucher Ctrl     =
====================================*/


.controller('saleVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
          console.log($scope.voucher);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetInventoryVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.voucher ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Sale voucher Ctrl   ======*/

/*====================================
=    CreditorA Voucher Ctrl     =
====================================*/


.controller('CreditorAVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    console.log(  $scope.service);
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
          console.log($scope.voucher);
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    
         
       console.log(  $scope.output.transid);
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     console.log($scope.id);
         
     testService.GetAccountingVoucher("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ,    $scope.voucher).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     console.log(response1.length);
   
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


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})



/*====================================
=    Logout Ctrl     =
====================================*/


.controller('logoutCtrl', function($location,$ionicHistory, $ionicLoading, $timeout) {
      $ionicLoading.show({template:'Logging out....'});
    

    $timeout(function () {
        $ionicLoading.hide();
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
         $location.path("/app/registertxt"); 

        }, 30);
  

 

})


/*====================================
=  End of   Logout Ctrl     =
====================================*/


/*====================================
=    Version Ctrl     =
====================================*/


.controller('versionCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
      
      $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

       $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

  cordova.getAppVersion.getVersionNumber(function (version) {
   $scope.version = version ;

});
  
 

})


/*====================================
=  End of   Logout Ctrl     =
====================================*/


/*====================================
=            Gallery Ctrl            =
====================================*/

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response) 
  {


    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.hide  = false ;
    $scope.enable = true ;
    // Activate ink for controller
     $scope.service = Services;
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
          console.log( $scope.ip);
          console.log( $scope.db);
          console.log($scope.us );
          console.log($scope.ps);

    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
      

var bankB = new Array();
var bankC = new Array();
var bankD = new Array();
var purchase = new Array();
var sale = new Array();
var cashB = new Array();
var cashC = new Array();
var cashD = new Array();
var creB = new Array();
var creC = new Array();
var creD = new Array();
var debB = new Array();
var debC = new Array();
var debD = new Array();
   $scope.labels = [ "April", "May", "June", "July","August","September","October","November","December","January", "February", "March"];
  $scope.series = ['Debit', 'Credit','Balance'];
  $scope.PSseries = ['Sale','Purchase'];
     

   testService.DesignGraphs("108.178.25.54" , "waves_SyncData", "wavesUser2;;125066;;A04;;OFFLINE" ,"waves77430@77430" ).then(function(response)
      {
        

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
 
        var response1 = Response.response(response); 
    
 console.log(response1);
   for(var i=0;i<response1.length;i++)
   {
     
    bankB.push(response1[i].bankB);
     bankC.push(response1[i].bankC);
      bankD.push(response1[i].bankD);
       purchase.push(response1[i].purc);
       sale.push(response1[i].sale);
       cashB.push(response1[i].cashB);
     cashC.push(response1[i].cashC);
      cashD.push(response1[i].cashD);
      creB.push(response1[i].creB);
     creC.push(response1[i].creC);
      creD.push(response1[i].creD);
        debB.push(response1[i].debB);
     debC.push(response1[i].debC);
      debD.push(response1[i].debD);

   
  $scope.data = [bankD,bankC,bankB];
 

 
   
  $scope.PSdata = [sale,purchase];


  $scope.cashdata = [cashD,cashC,cashB];



  $scope.credata = [creD,creC,creB];



  $scope.dbdata = [debD,debC,debB];

  
  
  }
   


   })

     

})

/*=====  End of Gallery Ctrl  ======*/






/*=================================
=            FACTORIES            =
=================================*/

.factory('blob',['$rootScope' , 'FileSaver' , '$window',function($rootScope , FileSaver,$window) {
    var messages = {};
   
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
  object.mobile = "";

 
  return object;

 
})


.factory('Services', function () {
  

 var object = {};
  object.login = "";
  

  return object;

 
})

.factory('transid', function () {
   var object = {};
  object.transid = "";
  return object;
})


.factory('voucher', function () {
   var object = {};
  object.voucher = "";
  return object;
})

.factory('loginid', function () {
   var object = {};
  object.loginid = "";
  return object;
})

/*=====  End of FACTORIES  ======*/