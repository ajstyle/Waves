
(function(){



var app = angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput' , 'angularSoap' , 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
   //Get uuid 

  var uuid =  window.device.uuid;

  alert(a);
    

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})



.factory("testService", ['$soap',function($soap){
    var base_url = "http://wcplreg.in/app/appLoginSer1.asmx";
    var action = "login" ; 
    return {
        HelloWorld: function(orderTo,branch,userId,password,mobileNo,deviceID){
            return $soap.post(base_url, action , {info1 : '125066' ,  info2 : 'A04' , info3 : 'AMIT' , info4 : '1234' , info5 : '917877361402' , info6 : '1234'});
        }
    }
}])

.directive('nksOnlyNumber', function () {
    return {
      restrict: 'EA',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {   
           scope.$watch(attrs.ngModel, function(newValue, oldValue) {
              var spiltArray = String(newValue).split("");
              
              if(attrs.allowNegative == "false") {
                if(spiltArray[0] == '-') {
                  newValue = newValue.replace("-", "");
                  ngModel.$setViewValue(newValue);
                  ngModel.$render();
                }
              }

              if(attrs.allowDecimal == "false") {
                  newValue = parseInt(newValue);
                  ngModel.$setViewValue(newValue);
                  ngModel.$render();
              }

              if(attrs.allowDecimal != "false") {
                if(attrs.decimalUpto) {
                   var n = String(newValue).split(".");
                   if(n[1]) {
                      var n2 = n[1].slice(0, attrs.decimalUpto);
                      newValue = [n[0], n2].join(".");
                      ngModel.$setViewValue(newValue);
                      ngModel.$render();
                   }
                }
              }
              
              
              if (spiltArray.length === 0) return;
              if (spiltArray.length === 1 && (spiltArray[0] == '-' || spiltArray[0] === '.' )) return;
              if (spiltArray.length === 2 && newValue === '-.') return;
              
                /*Check it is number or not.*/
                if (isNaN(newValue)) {
                  ngModel.$setViewValue(oldValue || '');
                  ngModel.$render();
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

   
     .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-star"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
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
  
.state('app.debtors', {
        url: '/debtors',
        views: {
            'menuContent': {
                templateUrl: 'templates/debtors.html',
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
    ;
  
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');




});
})();