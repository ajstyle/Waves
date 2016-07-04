(function(){

 
var app = angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput' , 'angularSoap' , 'ngCordova' , 'ngMessages' ,  'filereader' , 'ngAnimate','chart.js','pdf'])

app.run(['$ionicPlatform','$ionicLoading','$location' , '$http' , '$cordovaFile','connection', 'Mobile' , function($ionicPlatform,$ionicLoading,$location,$http,$cordovaFile,connection,Mobile) {
    $ionicPlatform.ready(function() {



       
$ionicPlatform.onHardwareBackButton(function(){

  $ionicLoading.hide();
 
});



 navigator.splashscreen.hide();
var uuid =  window.device.uuid;

      var output = Mobile;
   
     output.id=uuid ;

          
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
       colours : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] ,
      responsive: true
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
      var action8 = "GetTransaction" ; 
      var action9 = "GetAccountingVoucher";
    var action10  =  "GetInventoryVoucher";
     var action11  =  "GetItemTransaction";
      var action12  =  "DesignGraphs";
      var action13   =  "mySupport";
      
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
        } ,
           GetTransaction :  function(Ip,Db,Us,Psw,id)
        {
                return $soap.post(base_url, action8 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw ,id : id });
        } ,
        GetAccountingVoucher : function(Ip,Db,Us,Psw,voucher) 
         {
                return $soap.post(base_url, action9 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw ,voucher : voucher });
        },
        GetInventoryVoucher : function(Ip,Db,Us,Psw,voucher) 
         {
                return $soap.post(base_url, action10 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw ,voucher : voucher });
        },
        GetItemTransaction : function(Ip,Db,Us,Psw,id) 
         {
                return $soap.post(base_url, action11 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw ,id:id });
        },
         DesignGraphs : function(Ip,Db,Us,Psw) 
         {
                return $soap.post(base_url, action12 , {serIp : Ip , serDb : Db , serUs : Us ,serPsw : Psw  });
        },
        mySupport : function(logn,mob,comment) 
         {
                return $soap.post(base_url, action13 , {logn : logn , mob : mob ,comment :comment});
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
        templateUrl: 'templates/menu1.html',
        controller: 'AppCtrl'
    })

    $stateProvider.state('app1', {
        url: '/app1',
        abstract: true,
        templateUrl: 'templates/menu.html',
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



    .state('app.gallery', {
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
           
        }
    })

    
  
.state('app.debtors', {
        url: '/debtors',
        views: {
            'menuContent': {
                templateUrl: 'templates/debtors.html',
                controller: 'DebtorCtrl'
            }
            
        }
    })

.state('app.creditor', {
        url: '/Creditors',
        views: {
            'menuContent': {
                templateUrl: 'templates/creditors.html',
                controller: 'CreditorCtrl'
            }
        }
    })


.state('app.receipt', {
        url: '/receipt',
        views: {
            'menuContent': {
                templateUrl: 'templates/receipt.html',
                controller: 'receiptCtrl'
            }
        
        }
    })


.state('app.sales', {
        url: '/sales',
        views: {
            'menuContent': {
                templateUrl: 'templates/sales.html',
                controller: 'SalesCtrl'
            }
        }
    })

    
.state('app.inventory', {
        url: '/inventory',
        views: {
            'menuContent': {
                templateUrl: 'templates/inventory.html',
                controller: 'inventoryCtrl'
            }
            
        }
    })
    


  .state('app.cheque', {
        url: '/cheque',
        views: {
            'menuContent': {
                templateUrl: 'templates/cheque.html',
                controller: 'ChequeCtrl'
            }
           
        }
    })
    
  
   .state('app.purchase', {
        url: '/purchase',
        views: {
            'menuContent': {
                templateUrl: 'templates/purchase.html',
                controller: 'PurchaseCtrl'
            }
            
        }
    })


.state('app.other', {
        url: '/other',
        views: {
            'menuContent': {
                templateUrl: 'templates/other.html',
                controller: 'OtherCtrl'
            }
        }
    })

.state('app.support', {
        url: '/support',
        views: {
            'menuContent': {
                templateUrl: 'templates/support.html',
                controller: 'SupportCtrl'
            }
        }
    })
.state('app.transaction', {
        url: '/transaction',
        views: {
            'menuContent': {
                templateUrl: 'templates/transaction.html',
                controller: 'transactionCtrl'
            }
        }
    })
.state('app.transactionCreditors', {
        url: '/transactionCreditor',
        views: {
            'menuContent': {
                templateUrl: 'templates/transactionCreditor.html',
                controller: 'transactionCreditorCtrl'
            }
        }
    })
.state('app.transactionCheque', {
        url: '/transactionCheque',
        views: {
            'menuContent': {
                templateUrl: 'templates/transactionCheque.html',
                controller: 'transactionChequeCtrl'
            }
        }
    })
.state('app.transactionInventory', {
        url: '/transactionInventory',
        views: {
            'menuContent': {
                templateUrl: 'templates/transactionInventory.html',
                controller: 'transactionInventoryCtrl'
            }
        }
    })
.state('app.transactionOther', {
        url: '/transactionOther',
         views: {
            'menuContent': {
                templateUrl: 'templates/transactionOther.html',
                controller: 'transactionOtherCtrl'
            }
        }
       
    })
.state('app.voucher', {
        url: '/voucher/:acc',
         controller: 'voucherCtrl',
           views: {
            'menuContent': {
              
                templateUrl: 'templates/voucher.html',
                controller: 'voucherCtrl'
            }
        }    
                
               
            
    })

.state('app.Creditorvoucher', {
        url: '/Creditorvoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/Creditorvoucher.html',
                controller: 'CreditorvoucherCtrl'
            }
        }
    })
.state('app.purchaseVoucher', {
        url: '/purchaseVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/purchaseVoucher.html',
                controller: 'purchaseVoucherCtrl'
            }
        }
    })

.state('app.saleVoucher', {
        url: '/saleVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/saleVoucher.html',
                controller: 'saleVoucherCtrl'
            }
        }
    })
.state('app.inventoryVoucher', {
        url: '/inventoryVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/inventoryVoucher.html',
                controller: 'inventoryVoucherCtrl'
            }
        }
    })
.state('app.receiptVoucher', {
        url: '/receiptVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/receiptVoucher.html',
                controller: 'receiptVoucherCtrl'
            }
        }
    })
.state('app.chequeVoucher', {
        url: '/chequeVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/chequeVoucher.html',
                controller: 'chequeVoucherCtrl'
            }
        }
    })
.state('app.otherVoucher', {
        url: '/otherVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/otherVoucher.html',
                controller: 'otherVoucherCtrl'
            }
        }
    })
.state('app.CreditorAVoucher', {
        url: '/CreditorAVoucher',
        views: {
            'menuContent': {
                templateUrl: 'templates/receiptVoucher.html',
                controller: 'CreditorAVoucherCtrl'
            }
        }
    })
.state('app.logout', {
        url: '/logout',
        views: {
            'menuContent': {
                templateUrl: '',
                controller: 'logoutCtrl'
            }
        }
    })

 .state('app.version', {
        url: '/version',
        views: {
            'menuContent': {
                templateUrl: 'templates/version.html',
                controller: 'versionCtrl'
            }
        }
    })
    // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/login');




});
})();
