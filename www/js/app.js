(function(){

 
var app = angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput' , 'angularSoap' , 'ngCordova' , 'ngMessages' ,  'filereader' , 'ngAnimate','chart.js'])

app.run(['$ionicPlatform','$location' , '$http' , '$cordovaFile','connection', function($ionicPlatform,$location,$http,$cordovaFile,connection) {
    $ionicPlatform.ready(function() {

       document.addEventListener('deviceready', function () {

      $cordovaFile.checkFile(cordova.file.applicationStorageDirectory, "text.txt")
      .then(function (success) {
       $location.url("/app/registertxt"); 
      }, function (error) {
        
      });

  })

if( connection.checkconnection() == 'No network connection' )
{

   alert("No Network Connection ") ; 

}
 var uuid =  window.device.uuid;

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
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }])



.factory("testService", ['$soap',function($soap){
    var base_url = "http://wcplreg.in/app/appLoginSer1.asmx";
    var action = "login" ; 
    var action1 = "GetCustomers" ; 
          
     return {
        HelloWorld: function(orderTo,branch,userId,password,mobileNo,deviceID){
            return $soap.post(base_url, action , {info1 : orderTo ,  info2 : branch , info3 : userId , info4 : password , info5 : mobileNo , info6 : deviceID});
        },
        GetCustomer: function(){
            return $soap.post(base_url, action1 , {serIp : '108.178.25.54' , serDb : 'waves_SyncData' , serUs : 'wavesUser2;;125066;;A04' ,serPsw : 'waves77430@77430'});
        }
    }
}])



  .directive('validNumber', function() {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }

          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
                var val = '';
            }
            
            var clean = val.replace(/[^-0-9\.]/g, '');
            var negativeCheck = clean.split('-');
            var decimalCheck = clean.split('.');
            if(!angular.isUndefined(negativeCheck[1])) {
                negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
                clean =negativeCheck[0] + '-' + negativeCheck[1];
                if(negativeCheck[0].length > 0) {
                    clean =negativeCheck[0];
                }
                
            }
              
            if(!angular.isUndefined(decimalCheck[1])) {
                decimalCheck[1] = decimalCheck[1].slice(0,2);
                clean =decimalCheck[0] + '.' + decimalCheck[1];
            }

            if (val !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render();
            }
            return clean;
          });

          element.bind('keypress', function(event) {
            if(event.keyCode === 32) {
              event.preventDefault();
            }
          });
        }
      };
    })


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
        templateUrl: 'templates/servicemenu.html',
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
.state('app.receipt', {
        url: '/receipt',
        views: {
            'menuContent': {
                templateUrl: 'templates/receipt.html',
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
.state('app.sales', {
        url: '/sales',
        views: {
            'menuContent': {
                templateUrl: 'templates/sales.html',
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
.state('app.creditor', {
        url: '/Creditors',
        views: {
            'menuContent': {
                templateUrl: 'templates/creditors.html',
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
    
.state('app.inventory', {
        url: '/inventory',
        views: {
            'menuContent': {
                templateUrl: 'templates/inventory.html',
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
    


  .state('app.cheque', {
        url: '/cheque',
        views: {
            'menuContent': {
                templateUrl: 'templates/cheque.html',
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
    
  
   .state('app.purchase', {
        url: '/purchase',
        views: {
            'menuContent': {
                templateUrl: 'templates/purchase.html',
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
    ;


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');




});
})();