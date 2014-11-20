(function(global){
    var startpageModel,
        app = global.app = global.app || {};
    
    startpageModel = kendo.data.ObservableObject.extend({
        
        show:function(e)
        {
            console.log(e);
            //apps.pane.loader.show();
           // $('#preloader5').show();
           // sessionStorage.setItem("a","10");
        },
        termsAndCondition:function()
        {
            apps.navigate("views/terms.html");
        },
        getStarted:function()
        {
            //alert("get started");
            apps.navigate("views/terms.html");
        }
    });
    app.startpageService ={
        viewModel:new startpageModel()
    };
})(window);