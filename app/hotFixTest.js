fixInstanceMethodAfter ('ZSHHomePageViewController', 'viewDidLoad', function(instance, originInvocation)
{ 
    var pushInstance = runClassWithNoParamter ('WKLocalPushNotificationManager', 'sharedInstance');
    runVoidInstanceWithNoParamter (pushInstance,'iOS8_removeAllLocalNotifications');
    console.log('*** -> HotFix is work <- ***'); 
});
