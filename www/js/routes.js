angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('iNNOVALaRioja.eleccionesLaRioja2019', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eleccionesLaRioja2019.html',
        controller: 'eleccionesLaRioja2019Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.preguntasFrecuentes', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preguntasFrecuentes.html',
        controller: 'preguntasFrecuentesCtrl'
      }
    }
  })

  .state('iNNOVALaRioja.DNdeVoto', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/DNdeVoto.html',
        controller: 'DNdeVotoCtrl'
      }
    }
  })

  .state('iNNOVALaRioja.acercaDeINNOVA', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeINNOVA.html',
        controller: 'acercaDeINNOVACtrl'
      }
    }
  })

  .state('iNNOVALaRioja', {
    url: '/side-menu21',
    templateUrl: 'templates/iNNOVALaRioja.html',
    controller: 'iNNOVALaRiojaCtrl'
  })

  .state('iNNOVALaRioja.QuElegimos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuElegimos.html',
        controller: 'QuElegimosCtrl'
      }
    }
  })

  .state('iNNOVALaRioja.page18', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page18.html',
        controller: 'page18Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page19', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page19.html',
        controller: 'page19Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page20', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page21', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page21.html',
        controller: 'page21Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});