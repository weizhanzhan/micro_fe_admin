

;(function() {
  Promise.all([System.import('single-spa')]).then( function (modules) {
    var singleSpa = modules[0]
    console.log(singleSpa)
 
    singleSpa.registerApplication(
      'system',
      ()=>{
        return System.import('system')
      },
      location=> true
    );
    // singleSpa.registerApplication(
    //   'base',
    //   ()=>{
    //     return System.import('base')
    //   },
    //   location=> true
    // );
   
    singleSpa.start();
  
  })
})()