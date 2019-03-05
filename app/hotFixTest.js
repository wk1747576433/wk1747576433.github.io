fixInstanceMethodReplace('ZSHRestaurantDetailsViewController', 'testAction:', function(instance, originInvocation, originArguments)
{ 
    var btn = originArguments[0];
    
    console.log('*** -> HotFix is work <- ***'); 
});


fixInstanceMethodAfter('ZSHRestaurantDetailsViewController', 'initUI', function(instance, originInvocation)
{ 
    var naviItem = runInstanceWithNoParamter(instance,'navigationItem');
    var rightItem = runInstanceWithNoParamter(naviItem,'rightBarButtonItem');
    runInstanceWith1Paramter(rightItem,'setCustomView',null);
     
    console.log('*** -> HotFix is work <- ***'); 
});
