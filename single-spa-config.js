

;(function() {
  Promise.all([System.import('single-spa')]).then( function (modules) {
    var singleSpa = modules[0]
    console.log(singleSpa)
 

    singleSpa.registerApplication(
      'base',
      ()=>{
        return System.import('base')
      },
      location=> true
    );
    console.log(2)
    singleSpa.start();
    console.log(3)
  })
})()