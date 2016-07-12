
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

    $scope.output = Mobile;
    $scope.login = loginid ; 

$scope.Mobile   = $scope.output.text;

          
$scope.register = function(user) {
  

   
     $ionicLoading.show({
          template: '<ion-spinner icon="spiral"></ion-spinner>',
            hideOnStateChange : 'true',
          noBackdrop : 'true'
       });
      
              
            
                  user.mobileno = $scope.Mobile ;
               $scope.master = angular.copy(user);
                               
              
       
           $scope.loginid = $scope.master.user.loginid;
               $scope.login.id = $scope.loginid
              $scope.branchid = $scope.master.user.branchid;
           $scope.userid = $scope.master.user.userid;
            $scope.password = $scope.master.user.password;
            $scope.Mobile   = $scope.output.text;
            $scope.id       =  $scope.output.id ;
                         
            testService.HelloWorld($scope.loginid,$scope.branchid,$scope.userid,$scope.password,$scope.Mobile,  $scope.id ).then(function(response){
   
    var response = Response.response(response); 
 
    var res =  response["login"];
                         

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
  $scope.enable = false ;

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
          

                  

             testService.HelloWorld($scope.loginid,$scope.branchid,$scope.userid,$scope.password1,$scope.Mobile, $scope.id  ).then(function(response){
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
         
     testService.GetCustomer($scope.ip,$scope.db,$scope.us,$scope.ps ).then(function(response)
      {
         
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
      
       $scope.total = "Grand Total" ; 
        var response1 = Response.response(response); 
    $scope.response = response1; 
    

   


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
    $scope.total = "Total : " ;
    $scope.service = Services;
 
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
         
  testService.GetSupplier($scope.ip,$scope.db,$scope.us,$scope.ps ).then(function(response)
      {
         
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
      

        var response1 = Response.response(response); 
    $scope.response = response1; 
   


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

        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
          $scope.total = "Total : " ;  
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
         
     testService.GetOtherLedgers($scope.ip,$scope.db,$scope.us,$scope.ps ).then(function(response)
      {
        
         $scope.showme = true;
         $scope.nodata = false;  
        $ionicLoading.hide(); 
     
        var response1 = Response.response(response); 
    $scope.response = response1; 
    
  
 


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
    $scope.total = "total : " ; 
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
   
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



     
         
     testService.GetPDC($scope.ip,$scope.db,$scope.us,$scope.ps  , " " , " ").then(function(response)
      {
         console.log(response);
         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
    $scope.response = response1; 
    
    
 


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
    $scope.total = "Total : " ; 
    $scope.service = Services;
   
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



     
         
     testService.GetReceipts($scope.ip,$scope.db,$scope.us,$scope.ps  , " " , " ").then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
    
   
   $scope.response = response1; 
   
 


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



     
         
     testService.Getinventory($scope.ip,$scope.db,$scope.us,$scope.ps ).then(function(response)
      {
         console.log(response);
       
         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
   
   
   $scope.response = response1; 
    


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
   
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
         
           $scope.voucher = function(data,company)
      {
         $scope.output = voucher;
          $scope.output.voucher = data ;
          $scope.output.company = company ;
             
       
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



     
         
     testService. GetSales($scope.ip,$scope.db,$scope.us,$scope.ps  , "S" ).then(function(response)
      {
         console.log(response);
         $scope.total = "Grand Total";
         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
    
   
   $scope.response = response1; 
   
 


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
   
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
          $scope.voucher = function(data,company)
      {
         $scope.output = voucher;
          $scope.output.voucher = data ;
          $scope.output.company = company ;
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



     
         
     testService.GetPurchase($scope.ip,$scope.db,$scope.us,$scope.ps  , "P" ).then(function(response)
      {
         console.log(response);
         $scope.total = "Grand Total"; 
         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
     
   
   $scope.response = response1; 
  


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
       $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });
      $scope.comment = blob.user.comment  ; 

     testService.mySupport($scope.login1 ,$scope.Mobile,  $scope.comment ).then(function(response)
      {
        $ionicLoading.hide();
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


.controller('transactionCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher,$cordovaFile,$cordovaFileOpener2,$cordovaSocialSharing) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.total = "Total:" ;
    $scope.service = Services;
    $scope.output = transid;
    $scope.hide = "false";
     $scope.enable = false ;
  
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid
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

   
         
     testService.GetTransaction($scope.ip,$scope.db,$scope.us,$scope.ps  ,  $scope.id ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       
    
      

        var response1 = Response.response(response); 
       
     
        
         

         $scope.response = response1; 
     

//--------------------DOC Function -------------------------------------------------------------//

     $scope.doc = function(){


 var name =   $scope.output.name ;
 var debit = $filter('sumOfValuedash')(response1,'debit');
 var credit = $filter('sumOfValuedash')(response1,'credit');
 var balance = $filter('totalSumPriceQty')(response1,'debit' , 'credit');
         
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name });
var total = [] ; 
total.push({ debit : debit , credit : credit , balance : balance}) ; 

for(var i in response1) {

    var item = response1[i];
 
    
    Inventorydata.accounting.push({ 
        "Date" : item.date,
        "Type"  : item.typ,
        "Nera"  : item.nera ,
        "Debit"  : item.debit ,
        "Credit"    : item.credit , 
        "Balance" : item.balance,

       
     });
}



function buildTableBody(data, columns) {
    var body = [[ {text : 'Date', style: 'subheader'}, 
                  {text : 'Type',style : 'subheader'} , 
                  {text : 'Narration' , style: 'subheader'} ,
                  {text : 'Debit' , style: 'subheader'},
                  {text : 'Credit' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 

                  ]];

    data.forEach(function(row) {
      
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
     
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths: [65, '*',200, '*', '*',100],
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
function total1(data1)
{
 var data  = data1.toString()  ;
  return {
          text : data , style: 'subheader' 
          }}
  

var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'DEBTORS Report', style: 'header1' },
         { text: '', style: 'margin' },
         
         text(value),
        
        table(Inventorydata.accounting, ['Date','Type' ,'Nera' , 'Debit' , 'Credit' , 'Balance'] ),
          {
          
            table: {
                 widths: [65, '*',200, '*', '*',95],
                  
                body: [
                  
                    ['Total', { text: '' },  { text: '' }, total1(total[0].debit) , total1(total[0].credit) , total1(total[0].balance)  ]
                ]
            }
        }
 
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
      
    } ,content: {
      
      
     alignment: 'right' ,
      
    }
  }
}
 




 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
     

     var name =   $scope.output.name ; 
     var filename = name + " DEBTORS.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
     

    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
   
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
 
   $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/debtors", true)
      .then(function (success) {


         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/debtors/", pdfname , binaryArray, true)
        .then(function (success) {
           
 $cordovaFileOpener2.open(
    './sdcard/waves/debtors/'+pdfname,
    'application/pdf'
  ).then(function() {
   
        }, function(err) {
  
        err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error2"); 
  });
           
        }, function (error) {
           
        
        err = JSON.stringify(error) ; 
         alert("error1");
         alert(err) ; 
    });
}, function(err) {
  
        err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });
 

     
      }, function (error) {

        err = JSON.stringify(error) ; 
         alert(err) ; 
         alert("error4");
     
      });


   


});

 $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });
  
 pdfMake.createPdf(dd).download();

  }

 

 //--------------Share Function------------------------//

$scope.share = function () {



  
 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var debit = $filter('sumOfValuedash')(response1,'debit');
 var credit = $filter('sumOfValuedash')(response1,'credit');
 var balance = $filter('totalSumPriceQty')(response1,'debit' , 'credit');
var total = [] ; 
total.push({ debit : debit , credit : credit , balance : balance}) ; 


var value = [];
value.push({ text: name});

for(var i in response1) {

    var item = response1[i];

    
  Inventorydata.accounting.push({ 
        "Date" : item.date,
        "Type"  : item.typ,
        "Nera"  : item.nera , 
        "Debit"  : item.debit ,
        "Credit"    : item.credit , 
        "Balance" : item.balance,

       
     });
}



function buildTableBody(data, columns) {
    var body = [[ {text : 'Date', style: 'subheader'}, 
                  {text : 'Type',style : 'subheader'} , 
                  {text : 'Narration' , style: 'subheader'} ,
                  {text : 'Debit' , style: 'subheader'},
                  {text : 'Credit' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 

                  ]];

    data.forEach(function(row) {
      
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
   
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths:  [65, '*',200, '*', '*',95],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        },
        style : 'content' 
    };
}
function text(data)
{
  return {
    text : data , style: 'header2'
  }
}
  function total1(data1)
{
 var data  = data1.toString()  ;
  return {
          text : data , style: 'subheader' 
          }}

var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'DEBTORS Report', style: 'header1' },
         { text: '', style: 'margin' },
         text(value),

        table(Inventorydata.accounting, ['Date','Type' ,'Nera' , 'Debit' , 'Credit' , 'Balance'] ),
       {
          
            table: {
                 widths: [65, '*',200, '*', '*',95],
                  
                body: [
                  
                    ['Total', { text: '' },  { text: '' }, total1(total[0].debit) , total1(total[0].credit) , total1(total[0].balance)  ]
                ]
            }
        }
 
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
      
    } ,content: {
      
      
     alignment: 'right' ,
      
    }
  }
}

 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
    
 $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });
  

      var name =   $scope.output.name ; 
     var filename = name + " DEBTORS.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
     

    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
     
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/debtors", true)
      .then(function (success) {
         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/debtors/", pdfname , binaryArray, true)
        .then(function (success) {
    $cordovaFile.readAsDataURL(cordova.file.externalRootDirectory+"waves/debtors/", pdfname)
.then(function (data) {
 
$cordovaSocialSharing.shareViaEmail('Debtors Report ', 'Debtors Report', null, null, null, data)
  .then(function(result) {
  
  
  }, function(err) {
   var err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error4"); 
    
  });
 
}, function (error) {
   var err = JSON.stringify(error) ; 
         alert(err) ;
         alert("error3"); 
});        
 
           
        }, function (error) {
           var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error5"); 
           
    });
     }, function(err) {
  
     var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });




      }, function (error) {
     
      });
});


 pdfMake.createPdf(dd).download();







 
}


  })

    
    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Transaction Ctrl   ======*/








/*====================================
=     transactionCreditor  Ctrl            =
====================================*/


.controller('transactionCreditorCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher,$cordovaFile,$cordovaFileOpener2,$cordovaSocialSharing) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      $scope.total = "Total : "
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
     $scope.enable = false ;
    $scope.service = Services;
    $scope.output = transid;
   
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid;
          $scope.name = $scope.output.name ;
          $scope.hide = "false" ;
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


         
     testService.GetTransaction($scope.ip,$scope.db,$scope.us,$scope.ps  ,  $scope.id ).then(function(response)
      {
         console.log(response);

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
      
   $scope.response = response1; 
   


    $scope.doc = function(){
 


 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});
 var debit = $filter('sumOfValuedash')(response1,'debit');
 var credit = $filter('sumOfValuedash')(response1,'credit');
 var balance = $filter('totalSumPriceQty')(response1,'debit' , 'credit');



var total = [] ; 
total.push({ debit : debit , credit : credit , balance : balance}) ; 

function total1(data1)
{
 var data  = data1.toString()  ;
  return {
          text : data , style: 'subheader' 
          }}




for(var i in response1) {

    var item = response1[i];
  
  Inventorydata.accounting.push({ 
        "Date" : item.date,
        "Type"  : item.typ,
         "Nera"  : item.nera , 
        "Debit"  : item.debit ,
        "Credit"    : item.credit , 
        "Balance" : item.balance,

       
     });
}



function buildTableBody(data, columns) {
    var body = [[ {text : 'Date', style: 'subheader'}, 
                   {text : 'Type' , style: 'subheader'} ,
                  {text : 'Narration',style : 'subheader'} , 
                 
                  {text : 'Debit' , style: 'subheader'},
                  {text : 'Credit' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 

                  ]];

    data.forEach(function(row) {
   
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
     
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths: [65, 40,190, 60, 60,110],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        },
        style : 'content'
    };
}
function text(data)
{
  return {
    text : data , style: 'subheader'
  }
}
  

var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'Creditor Report', style: 'header1' },
         { text: '', style: 'margin' },
         text(value),

        table(Inventorydata.accounting, ['Date','Type' ,'Nera' , 'Debit' , 'Credit' , 'Balance'] ),
        {
          
            table: {
                  widths: [65, 40,190, 60, 60,110],

                  
                body: [
                  
                    ['Total', { text: '' },  { text: ''}, total1(total[0].debit) , total1(total[0].credit) , total1(total[0].balance)  ]
                ]
            }
        }
 
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
      
    } ,content: {
      
      
     alignment: 'center' ,
      
    }
  }
}
 

 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
    
      var name =   $scope.output.name ; 
     var filename = name + " CREDITORS.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
     


    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
   $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
 $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/creditors", true)
      .then(function (success) {

         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/creditors/", pdfname , binaryArray, true)
        .then(function (success) {
           
 $cordovaFileOpener2.open(
    './sdcard/waves/creditors/'+pdfname,
    'application/pdf'
  ).then(function() {
   
        }, function(err) {
  
   
  });
           
        }, function (error) {
           
    });

}, function(err) {
  
        err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });

     
      }, function (error) {
     
      });


   


});

 $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });
  
 pdfMake.createPdf(dd).download();

  }


 //--------------Share Function------------------------//

$scope.share = function () {




 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});
var debit = $filter('sumOfValuedash')(response1,'debit');
 var credit = $filter('sumOfValuedash')(response1,'credit');
 var balance = $filter('totalSumPriceQty')(response1,'debit' , 'credit');
var total = [] ; 
total.push({ debit : debit , credit : credit , balance : balance}) ; 


for(var i in response1) {

    var item = response1[i];

    
   Inventorydata.accounting.push({ 
        "Date" : item.date,
       "Type"  : item.typ,
        "Nera"  : item.nera , 
        
        "Debit"  : item.debit ,
        "Credit"    : item.credit , 
        "Balance" : item.balance,

       
     });
}


function total1(data1)
{
 var data  = data1.toString()  ;
  return {
          text : data , style: 'subheader' 
          }}

function buildTableBody(data, columns) {
    var body = [[ {text : 'Date', style: 'subheader'}, 
                 
                  {text : 'Type' , style: 'subheader'} ,
                   {text : 'Narration',style : 'subheader'} , 
                  {text : 'Debit' , style: 'subheader'},
                  {text : 'Credit' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 

                  ]];

    data.forEach(function(row) {
       
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
       
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
                 widths: [65, 40,190, 60, 60,110],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        }
       
    };
}
function text(data)
{
  return {
    text : data , style: 'header1'
  }
}
  

var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'Creditors Report', style: 'header1' },
         { text: '', style: 'margin' },
         text(value),

        table(Inventorydata.accounting, ['Date','Type','Nera'  , 'Debit' , 'Credit' , 'Balance'] ),
         
{
          
            table: {
                  widths: [65, 40,190, 60, 60,110],
                  
                body: [
                  
                    ['Total', { text: '' },  { text: '' }, total1(total[0].debit) , total1(total[0].credit) , total1(total[0].balance)  ]
                ]
            }
        }  
 
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
   var name =   $scope.output.name ; 
     var filename = name + " CREDITORS.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
     
     

    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
     
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/creditors", true)
      .then(function (success) {
         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/creditors/", pdfname , binaryArray, true)
        .then(function (success) {
    $cordovaFile.readAsDataURL(cordova.file.externalRootDirectory+"waves/creditors/", pdfname)
.then(function (data) {
 
$cordovaSocialSharing.shareViaEmail('Creditor Report ', 'Creditor Report', null, null, null, data)
  .then(function(result) {
  
  
  }, function(err) {
   var err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error4"); 
    
  });
 
}, function (error) {
   var err = JSON.stringify(error) ; 
         alert(err) ;
         alert("error3"); 
});        
 
           
        }, function (error) {
           var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error5"); 
           
    });
     }, function(err) {
  
     var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });




      }, function (error) {
     
      });
});
  $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });

 pdfMake.createPdf(dd).download();







 
}


  })

    
    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of  Transaction Creditor Ctrl   ======*/





/*====================================
=     transaction Inventory  Ctrl            =
====================================*/


.controller('transactionInventoryCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher, $cordovaFile,$cordovaFileOpener2,$cordovaSocialSharing) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.enable = false ;
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


          
        


     testService.GetItemTransaction($scope.ip,$scope.db,$scope.us,$scope.ps  ,  $scope.id ).then(function(response)
      { 
       

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
          console.log(response1);
           $scope.response = response1; 
    
  
    
 
    $scope.doc = function(){
 
 
 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});

for(var i in response1) {

    var item = response1[i];

    console.log(item);
    Inventorydata.accounting.push({ 
        "Number" : item.vchno,
        "Date" : item.date,
         "Party" : item.ledName,
        "Type"  : item.typ,
         "Receive"  : item.debit ,
        "Issue"    : item.credit , 
        "Balance" : item.balance
       
     });
}



function buildTableBody(data, columns) {
    var body = [[ {text : 'Number', style: 'subheader'}, 
                  {text : 'Date', style: 'subheader'}, 
                  {text : 'Party', style: 'subheader'}, 
                  {text : 'Type' , style: 'subheader'} ,
                  {text : 'Receive' , style: 'subheader'},
                  {text : 'Issue' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 
                  ]];

    data.forEach(function(row) {
      
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
     
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths: [60,60,150, '*', '*', '*','*'],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        },
        style : 'content'
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

        table(Inventorydata.accounting, ['Number','Date', 'Party' , 'Type' , 'Receive' , 'Issue' , 'Balance'] ),
      
 
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
      
    } ,
    content: {
      alignment: 'right' 
      }
  }
}
 

 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
     var name =   $scope.output.name ; 
     var filename = name + " INVENTORY.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
   

    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
     
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/inventory", true)
      .then(function (success) {
         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/inventory/", pdfname , binaryArray, true)
        .then(function (success) {
           
 $cordovaFileOpener2.open(
    './sdcard/waves/inventory/'+pdfname,
    'application/pdf'
  ).then(function() {
   
        }, function(err) {
    
  });
           
        }, function (error) {
           
    });
     }, function(err) {
  
        err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });




      }, function (error) {
     
      });
});
 $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });
 pdfMake.createPdf(dd).download();

 }
 
$scope.share = function () {



 
 
 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});

for(var i in response1) {

    var item = response1[i];

    console.log(item);
    Inventorydata.accounting.push({ 
        "Number" : item.vchno,
        "Date" : item.date,
         "Party" : item.ledName,
        "Type"  : item.typ,
         "Receive"  : item.debit ,
        "Issue"    : item.credit , 
        "Balance" : item.balance
       
     });
}



function buildTableBody(data, columns) {
    var body = [[ {text : 'Number', style: 'subheader'}, 
                  {text : 'Date', style: 'subheader'}, 
                  {text : 'Party', style: 'subheader'}, 
                  {text : 'Type' , style: 'subheader'} ,
                  {text : 'Receive' , style: 'subheader'},
                  {text : 'Issue' , style: 'subheader' } ,
                  {text :  'Balance' , style: 'subheader'} 
                  ]];

    data.forEach(function(row) {
      
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
     
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths: [60,60,150, '*', '*', '*','*'],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        }, 
        style : 'content'
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

        table(Inventorydata.accounting, ['Number','Date', 'Party' , 'Type' , 'Receive' , 'Issue' , 'Balance'] ),
      
 
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
      
    }, content: {
      
      
     alignment: 'right' ,
      
    }
  }
}
 

 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
     var name =   $scope.output.name ; 
     var filename = name + " INVENTORY.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
 

    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
     
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/inventory", true)
      .then(function (success) {
         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/inventory/", pdfname , binaryArray, true)
        .then(function (success) {
    $cordovaFile.readAsDataURL(cordova.file.externalRootDirectory+"waves/inventory/", pdfname)
.then(function (data) {
 
$cordovaSocialSharing.shareViaEmail('Inventory Report ', 'Inventory Report', null, null, null, data)
  .then(function(result) {
  
  
  }, function(err) {
   var err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error4"); 
    
  });
 
}, function (error) {
   var err = JSON.stringify(error) ; 
         alert(err) ;
         alert("error3"); 
});        
 
           
        }, function (error) {
           var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error5"); 
           
    });
     }, function(err) {
  
     var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });




      }, function (error) {
     
      });
});

 $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });

 pdfMake.createPdf(dd).download();







 
}

 })
     

  
    ionicMaterialInk.displayEffect();

   })                             

/*=====  End of  Transaction Inventory Ctrl   ======*/




/*====================================
=     transaction Other  Ctrl            =
====================================*/


.controller('transactionOtherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,transid,voucher,$cordovaFile,$cordovaFileOpener2,$cordovaSocialSharing) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       $scope.enable = false ;
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = transid;
   
        var data = $scope.service.login ;
          $scope.total = "Total : " ; 
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.id  = $scope.output.transid;
           $scope.name = $scope.output.name ;
           $scope.hide = "false" ; 
        
         
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
          noBackdrop : 'true',
          duration : 3000 

       });

    
         
     testService.GetTransaction($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.id ).then(function(response)
      {
        

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
      console.log(response1);
  
   
   $scope.response = response1; 
   
    
    $scope.doc = function(){


var debit = $filter('sumOfValuedash')(response1,'debit');
 var credit = $filter('sumOfValuedash')(response1,'credit');
 var balance = $filter('totalSumPriceQty')(response1,'debit' , 'credit');

 var name =  "Others" ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});
var total = [] ; 
total.push({ debit : debit , credit : credit , balance : balance}) ; 
for(var i in response1) {

    var item = response1[i];

    
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
    
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
    
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths: [60, 60, 90, 90,90],
            headerRows: 2,
           
            body: buildTableBody(data, columns)
           
            
        },
         style : 'content'
    };
}
function text(data)
{
  return {
    text : data , style: 'header2'
  }
}
  function total1(data1)
{
 var data  = data1.toString()  ;
  return {
          text : data , style: 'subheader' 
          }}

 
var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'Inventory Report', style: 'header1' },
         { text: '', style: 'margin' },
         text(value),
           
        table(Inventorydata.accounting, ['Date', 'Type' , 'Receive' , 'Issue' , 'Balance'] ),
        {
          
            table: {
                 widths:  [60, 60,  90, 90,90],
                  
                body: [
                  
                    ['Total', { text: '' }, total1(total[0].debit) , total1(total[0].credit) , total1(total[0].balance)  ]
                ]
            }
        }  

 
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
      
    },
    content: {
      
      
     alignment: 'center' ,
      
    }
  


  }
}



 pdfMake.createPdf(dd).getBuffer(function (buffer){
    
   var name =   $scope.output.name ; 
     var filename = name + " OTHERS.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");
     


    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
 
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
 
   $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/others", true)
      .then(function (success) {


         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/others/", pdfname , binaryArray, true)
        .then(function (success) {
           
 $cordovaFileOpener2.open(
    './sdcard/waves/others/'+pdfname,
    'application/pdf'
  ).then(function() {
   
        }, function(err) {
  
        err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error2"); 
  });
           
        }, function (error) {
           
        
        err = JSON.stringify(error) ; 
         alert("error1");
         alert(err) ; 
    });
}, function(err) {
  
        err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });
 

     
      }, function (error) {

        err = JSON.stringify(error) ; 
         alert(err) ; 
         alert("error4");
     
      });

   


});

 $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });
  
 pdfMake.createPdf(dd).download();

  }
 

 //--------------Share Function------------------------//

$scope.share = function () {
 var debit = $filter('sumOfValuedash')(response1,'debit');
 var credit = $filter('sumOfValuedash')(response1,'credit');
 var balance = $filter('totalSumPriceQty')(response1,'debit' , 'credit');


 
 var name =   $scope.output.name ; 
var Inventorydata = [];
var Inventorydata = {
    accounting: []
};
var value = [];
value.push({ text: name});

var total = [] ; 
total.push({ debit : debit , credit : credit , balance : balance}) ; 
for(var i in response1) {

    var item = response1[i];
 
    
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
    
        var dataRow = [];
 
        columns.forEach(function(column) {
            
            dataRow.push(row[column].toString());
   
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
              widths:  [60, 60,  90, 90,90],
            headerRows: 2,
           
            body: buildTableBody(data, columns),
            
        },
        style : 'content'
    };
}
function text(data)
{
  return {
    text : data , style: 'header2'
  }
}
  function total1(data1)
{
 var data  = data1.toString()  ;
  return {
          text : data , style: 'subheader' 
}}

var dd = {
 
    content: [
        { text: 'Waves Compusoft', style: 'header' },
        { text: '', style: 'margin' },
        
        { text: 'Inventory Report', style: 'header1' },
         { text: '', style: 'margin' },
         text(value),

        table(Inventorydata.accounting, ['Date', 'Type' , 'Receive' , 'Issue' , 'Balance'] ),
      {
          
            table: {
                 widths:  [60, 60,  90, 90,90],
                  
                body: [
                  
                    ['Total', { text: '' },   total1(total[0].debit) , total1(total[0].credit) , total1(total[0].balance)  ]
                ]
            }
        }  

 
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
      
    }, content: {
      
      
     alignment: 'center' ,
      
    }
  }
}
 

 
 pdfMake.createPdf(dd).getBuffer(function (buffer){
       var name =   $scope.output.name ; 
     var filename = name + " OTHERS.pdf" ; 
       var pdfname =  filename.replace(/ /g,"_");

    var utf8 = new Uint8Array(buffer); // Convert to UTF-8... 
  
   var binaryArray = utf8.buffer; // Convert to Binary...
    var blob = new Blob([binaryArray], {type: 'application/pdf'});
  
  var pdfUrl = URL.createObjectURL( blob);
     
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves", true)
      .then(function (success) {
  $cordovaFile.createDir(cordova.file.externalRootDirectory, "waves/others", true)
      .then(function (success) {
         $cordovaFile.writeFile(cordova.file.externalRootDirectory+"waves/others/", pdfname , binaryArray, true)
        .then(function (success) {
    $cordovaFile.readAsDataURL(cordova.file.externalRootDirectory+"waves/others/", pdfname)
.then(function (data) {
 
$cordovaSocialSharing.shareViaEmail('Inventory Report ', 'Inventory Report', null, null, null, data)
  .then(function(result) {
  
  
  }, function(err) {
   var err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error4"); 
    
  });
 
}, function (error) {
   var err = JSON.stringify(error) ; 
         alert(err) ;
         alert("error3"); 
});        
 
           
        }, function (error) {
           var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error5"); 
           
    });
     }, function(err) {
  
     var  err = JSON.stringify(err) ; 
         alert(err) ;
         alert("error3"); 
  });




      }, function (error) {
     
      });
});

  $ionicLoading.show({
         template: '<div class = "pdfloader"><div class = "loader1"><center> Creating PDF....</center></div>',
          hideOnStateChange : 'true',
          noBackdrop : 'true',
          duration :  3000
  });
 pdfMake.createPdf(dd).download();







 
}


  })

    
    // Set Ink
    ionicMaterialInk.displayEffect();



 

})


/*=====  End of  Transaction Other Ctrl   ======*/



/*====================================
=     Voucher  Ctrl            =
====================================*/


.controller('voucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$location,$ionicLoading,$filter,connection,Services,Response,voucher,transid) {
    // Set Header
      $scope.title = "Invoice" ; 
  $scope.output = voucher;
    $scope.acc1 =  $scope.output.acc ;
   var acc =  $scope.output.acc 
    $scope.output1 = transid;
     $scope.enable = false ;
 $scope.name = $scope.output1.name ;

  $scope.template = function()
  {
     if(acc == "A")
     {
      return true ; 
     }
    else
    {
      return false ; 
    }
  }

$scope.template1 = function()
  {
     if(acc == "I")
     {
      return true ; 
     }
    else
    {
      return false ; 
    }
  }


     if(acc == "I")
          {
           
             $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
 
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


      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

  
         
     testService.GetInventoryVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher ).then(function(response)
      {
        

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
  
   
   $scope.response = response1; 
    
 
   

   })


    // Set Ink
    ionicMaterialInk.displayEffect();
          }
   else
   {
     $scope.title = "Voucher" ; 
    
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
       
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
  
        
  
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

    
        
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

         
     testService.GetAccountingVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,   $scope.voucher ).then(function(response)
      {
       

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
    
   
   $scope.response = response1; 
    
    
 


   })


    // Set Ink
    ionicMaterialInk.displayEffect();



 }

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
        $scope.enable = false ;
    $scope.acc1 =  $scope.output.acc ;
   var acc =  $scope.output.acc 
    
  $scope.template = function()
  {
     if(acc == "A")
     {
      return true ; 
     }
    else
    {
      return false ; 
    }
  }

$scope.template1 = function()
  {
     if(acc == "I")
     {
      return true ; 
     }
    else
    {
      return false ; 
    }
  }



    if(acc == "A")
          {
              $scope.title = "Voucher" ; 
             $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
    $scope.output = voucher
    
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

    
         
      
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

  
         
     testService.GetAccountingVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher).then(function(response)
      {
     
         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
  
   
   $scope.response = response1; 
    
   


   })


    // Set Ink
    ionicMaterialInk.displayEffect();

          }
          else
          {
                $scope.title = "Invoice" ; 

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.service = Services;
   
  
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

    
         
       
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

     
     testService.GetInventoryVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,   $scope.voucher ).then(function(response)
      {
      

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
    
   $scope.response = response1; 
    
  
 


   })


    // Set Ink
    ionicMaterialInk.displayEffect();



 }

})

/*=====  End of Inventory voucher Ctrl   ======*/


.controller('inventoryVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
        $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
     $scope.enable = false ;
    $scope.service = Services;
    $scope.output = voucher


 $scope.output1 = transid;
   
 $scope.name = $scope.output1.name ;

  
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

    
         
     
      $ionicLoading.show({
          templateUrl: 'templates/loader.html',
          hideOnStateChange : 'true',
          noBackdrop : 'true'

       });

    
         
     testService.GetInventoryVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher  ).then(function(response)
      {
      

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
  
   
   $scope.response = response1; 
   
   


   })


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Inventory voucher Ctrl   ======*/


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

     $scope.enable = false ;
    $scope.service = Services;
    $scope.output = voucher
 
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
     
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

         
     testService.GetAccountingVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher).then(function(response)
      {
     

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
   
   $scope.response = response1; 

  


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
        $scope.enable = false ;
    $scope.service = Services;
    $scope.output = voucher
   
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
       $scope.company     =  $scope.output.company
       
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

   
         
     testService.GetInventoryVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher ).then(function(response)
      {
        

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
   
   $scope.response = response1; 
  
 
 


   })


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Purchasevoucher Ctrl   ======*/


/*====================================
=    Sale voucher Ctrl     =
====================================*/


.controller('saleVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher,transid) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
         $scope.enable = false ;

    $scope.service = Services;
    $scope.output = voucher

        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
            $scope.company  = $scope.output.company;
     
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

 
         
     testService.GetInventoryVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher ).then(function(response)
      {
    

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
  
   $scope.response = response1; 
    
    

   })


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Sale voucher Ctrl   ======*/



/*====================================
=   Other voucher Ctrl     =
====================================*/


.controller('otherVoucherCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,testService,$ionicLoading,$filter,connection,Services,Response,voucher) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
      
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
         $scope.enable = false ;
    $scope.service = Services;
    $scope.output = voucher
   
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
         
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

    
         
     testService.GetAccountingVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher).then(function(response)
      {
    

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
    
   
   $scope.response = response1; 
    
  
 


   })


    // Set Ink
    ionicMaterialInk.displayEffect();



 

})

/*=====  End of Other voucher Ctrl   ======*/





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
         $scope.enable = false ;
    $scope.service = Services;
    $scope.output = voucher
    
        var data = $scope.service.login ;
          
          $scope.ip = data.ip;
          $scope.db  = data.db;
          $scope.us  =  data.us ; 
          $scope.ps = data.ps ; 
           $scope.voucher  = $scope.output.voucher;
     
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

  
         
     testService.GetAccountingVoucher($scope.ip,$scope.db,$scope.us,$scope.ps  ,    $scope.voucher).then(function(response)
      {
       

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
       

        var response1 = Response.response(response); 
  
   $scope.response = response1; 
    
 


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
     

   testService.DesignGraphs($scope.ip,$scope.db,$scope.us,$scope.ps  ).then(function(response)
      {
        

         $scope.showme = true;
         $scope.nodata = false;  
       $ionicLoading.hide();
 
        var response1 = Response.response(response); 
    
 
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
            
         
                             var txt =  this.user
                var val = {
                             text: JSON.stringify(txt)
                           };
                         var txt =  val.text;
                 

                           
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




  .filter('sumOfValue', function () {
    return function (data, key) {
       
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;        
        var sum = 0;
         
        angular.forEach(data,function(v,k){
         
            sum = sum + parseInt(v[key]);
        });        
        return sum;
    }
}).filter('totalSumPriceQty', function () {
    return function (data, key1, key2) {        
        if (angular.isUndefined(data) && angular.isUndefined(key1)  && angular.isUndefined(key2)) 
            return 0;
        
        
        var sum1 = 0;
        var sum2 = 0 ; 
        var sum  = 0 ;
        
        
        angular.forEach(data,function(v,k){
               if(v[key1] =='-')
         {
            v[key1] = v[key1].replace("-", "0");
            
         }
          if(v[key2] =='-')
         {
            v[key2] = v[key2].replace("-", "0");
            
         }


               
              sum1 = sum1 + parseInt(v[key1]);
                 
                 sum2 = sum2 + parseInt(v[key2]);
             
            sum =  sum1 - sum2;
             if(sum > 0)
             {
                sum = sum+" Dr";
             }        
             else if(sum < 0 ) {
               
              sum = Math.abs(sum); 
              
              sum = sum + " Cr";
             }else
             {
              sum = 0 ; 
             }
        });
        return sum;
    }
}).filter('sumOfValuedash', function () {
    return function (data, key) {
       
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;        
        var sum = 0;


        
        angular.forEach(data,function(v,k){
        
         if(v[key]=='-')
         {  
            v[key] = v[key].replace("-", "0");
            
         }
          if(v[key]=='---')
         {  
            v[key] = v[key].replace("---", "0");
            
         }
            sum = sum + parseInt(v[key]);
         
         
        });        
        return sum;
    }
})







/*=====  End of FACTORIES  ======*/
