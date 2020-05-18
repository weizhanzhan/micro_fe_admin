

;(function() {
  Promise.all([System.import('single-spa')]).then( function (modules) {
    var singleSpa = modules[0]

    singleSpa.registerApplication(
      'single-spa-playground',
      function(){
        return System.import('single-spa-playground')
      },
      function(location){
        return location.pathname.startsWith('/vue')
      }
    );

    singleSpa.start();
  })
})()