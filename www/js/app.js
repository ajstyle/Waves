(function(){

 
var app = angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput' , 'angularSoap' , 'ngCordova' , 'ngMessages' ,  'filereader' , 'ngAnimate','chart.js'])

app.run(['$ionicPlatform','$ionicLoading','$location' , '$http' , '$cordovaFile','connection', 'Mobile' , function($ionicPlatform,$ionicLoading,$location,$http,$cordovaFile,connection,Mobile) {
    $ionicPlatform.ready(function() {
$ionicPlatform.onHardwareBackButton(function(){
Materialize.updateTextFields();
  $ionicLoading.hide();
});



var uuid =  window.device.uuid;

      var output = Mobile;
   
     output.id=uuid ;

          navigator.splashscreen.hide();
       document.addEventListener('deviceready', function () {

      $cordovaFile.checkFile(cordova.file.applicationStorageDirectory, "text.txt")
      .then(function (success) {
       $location.url("/app/registertxt"); 
      }, function (error) {
       
        //$location.url("/app/login"); 
      });

  })

if( connection.checkconnection() == 'No network connection' )
{

   alert("No Network Connection ") ; 

}
 

 

  

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}])



.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', 'green'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }])



.factory("testService", ['$soap', 'Services',function($soap,Services){
    var base_url = "http://wcplreg.in/app/appLoginSer1.asmx";
    var action = "login" ; 
    var action1 = "GetCustomers" ;
    var action2 = "GetSupplier";
    var action3 = "GetOtherLedgers";
    var action4 = "GetPDC";
    var action5 = "GetReceipts";
    var action6 = "GetSalesPurchase" ; 
      var action7 = "GetItems" ; 
     return {
        HelloWorld: function(orderTo,branch,userId,password,mobileNo,deviceID){
            return $soap.post(base_url, action , {info1 : orderTo ,  info2 : branch , info3 : userId , info4 : password , info5 : mobileNo , info6 : deviceID});
        },
        GetCustomer: function(Ip,Db,Us,Psw){
            return $soap.post(base_url, action1 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw});
        },
       GetSupplier: function(Ip,Db,Us,Psw){
            return $soap.post(base_url, action2 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw});
        },
        GetOtherLedgers : function(Ip,Db,Us,Psw)
        {
                return $soap.post(base_url, action3 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw});
        } ,
       GetPDC : function(Ip,Db,Us,Psw,dFrom,dTo)
        {
                return $soap.post(base_url, action4 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw, dFrom:dFrom , dto : dTo});
        } ,
    
       GetReceipts : function(Ip,Db,Us,Psw,dFrom,dTo)
        {
                return $soap.post(base_url, action5 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw, dFrom:dFrom , dto : dTo});
        } ,
    
        GetSales :  function(Ip,Db,Us,Psw,Type)
        {
                return $soap.post(base_url, action6 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw, typ : Type });
        } ,
         GetPurchase :  function(Ip,Db,Us,Psw,Type)
        {
                return $soap.post(base_url, action6 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw, typ : Type });
        } ,
      
         Getinventory :  function(Ip,Db,Us,Psw)
        {
                return $soap.post(base_url, action7 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw });
        } 






    }
}])



 

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

   .state('app1', {
        url: '/app1',
        abstract: true,
        templateUrl: 'templates/menu1.html',
        controller: 'AppCtrl'
    })
 

   .state('app2', {
        url: '/app2',
        abstract: true,
        templateUrl: 'templates/menu1.html',
        controller: 'AppCtrl'
    })

   

     .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'MainCtrl'
            }
            
        }
    })


      .state('app.registertxt', {
        url: '/registertxt',
        views: {
            'menuContent': {
                templateUrl: 'templates/registertxt.html',
                controller: 'MainCtrl1'
            }
            
        }
    })









.state('app.customer', {
        url: '/customer',
        views: {
            'menuContent': {
                templateUrl: 'text.txt',
                controller: 'customersController'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })








    .state('app1.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            }
            
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
  
.state('app2.debtors', {
        url: '/debtors',
        views: {
            'menuContent': {
                templateUrl: 'templates/debtors.html',
                controller: 'DebtorCtrl'
            }
            
        }
    })

.state('app2.creditor', {
        url: '/Creditors',
        views: {
            'menuContent': {
                templateUrl: 'templates/creditors.html',
                controller: 'CreditorCtrl'
            }
        }
    })


.state('app2.receipt', {
        url: '/receipt',
        views: {
            'menuContent': {
                templateUrl: 'templates/receipt.html',
                controller: 'receiptCtrl'
            }
        
        }
    })


.state('app2.sales', {
        url: '/sales',
        views: {
            'menuContent': {
                templateUrl: 'templates/sales.html',
                controller: 'SalesCtrl'
            }
        }
    })

    
.state('app2.inventory', {
        url: '/inventory',
        views: {
            'menuContent': {
                templateUrl: 'templates/inventory.html',
                controller: 'inventoryCtrl'
            }
            
        }
    })
    


  .state('app2.cheque', {
        url: '/cheque',
        views: {
            'menuContent': {
                templateUrl: 'templates/cheque.html',
                controller: 'ChequeCtrl'
            }
           
        }
    })
    
  
   .state('app2.purchase', {
        url: '/purchase',
        views: {
            'menuContent': {
                templateUrl: 'templates/purchase.html',
                controller: 'PurchaseCtrl'
            }
            
        }
    })


.state('app2.other', {
        url: '/other',
        views: {
            'menuContent': {
                templateUrl: 'templates/other.html',
                controller: 'OtherCtrl'
            }
        }
    })








    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');




});
})();