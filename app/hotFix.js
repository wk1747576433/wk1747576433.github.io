fixInstanceMethodReplace('ZSHRestaurantDetailsViewController', 'testAction:', function(instance, originInvocation, originArguments)
{ 
    console.log('*** -> HotFix is work <- ***'); 
});

fixInstanceMethodAfter('ZSHRestaurantDetailsViewController', 'initUI', function(instance, originInvocation)
{ 
    var naviItem = runInstanceWithNoParamter(instance,'navigationItem');
    var rightItem = runInstanceWithNoParamter(naviItem,'rightBarButtonItem');
    runVoidInstanceWithNoParamter(rightItem,'setCustomView:');
     
    console.log('*** -> HotFix is work <- ***'); 
});
