;(function() {
  Promise.all([System.import('single-spa')]).then( function (modules) {
    var singleSpa = modules[0]
 
    singleSpa.registerApplication(
      'base',
      ()=>{
        return System.import('base')
      },
      location=> true
    );
    singleSpa.start();
  })
})()