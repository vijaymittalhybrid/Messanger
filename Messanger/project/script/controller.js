/*homePage.controller("startPageController", function($scope) {
    $scope.terms  = function() {alert("Note Saved");};
});*/

        
my.controller("myPage", function($scope) {
    console.log($scope);

    $scope.name  = "hello india";
    $scope.hello = function(){
        alert("hello");
        $location.path($path);
    };
});