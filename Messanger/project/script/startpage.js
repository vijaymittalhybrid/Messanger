(function(global){
    var startpageModel,
        app = global.app = global.app || {};
    
    startpageModel = kendo.data.ObservableObject.extend({
        
        show:function(e)
        {
            //apps.pane.loader.show();
         
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "project/data/countries.json",
                        dataType: "json"
                    }
                },
                
            }); 
            
            $("#mob_number").kendoComboBox({
                dataSource:dataSource,
                dataTextField: "name",
                dataValueField: "code",
                headerTemplate: '<div class="dropdown-header">' +
                                '<span class="k-widget k-header">Code</span>' +
                                '<span class="k-widget k-header" style="text-align:center">Name</span>' +
                                '</div>',
                template: kendo.template($("#combo_template").html())
            });
            
            var combobox = $("#mob_number").data("kendoComboBox"); 
            combobox.input.focus(function() {
                combobox.input.blur();
            });
        },
        phonenumber:function()
        {
            apps.navigate("views/aboutyou.html");
        }
    });
    app.startpageService ={
        viewModel:new startpageModel()
    };
})(window);