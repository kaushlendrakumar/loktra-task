var app = angular.module('loktraApp', []);

app.controller('loktraCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.data = [
    	{
    		"imgName" : "honor.jpeg",
    		"itemName" : "Honor 9 Lite (Glacier Grey, 64 GB)",
    		"itemConfig" : "4 GB RAM",
    		"itemOfrPrice" : 14999,
    		"itemRelPrice" : 16999,
    		"qnty" : 1
    	},
    	{
    		"imgName" : "watch.jpeg",
    		"itemName" : "Provogue MIGHTY-030307 Watch - For Men",
    		"itemConfig" : "6 Month Guarantee",
    		"itemOfrPrice" : 790,
    		"itemRelPrice" : 1799,
    		"qnty" : 1
    	},
        {
            "imgName" : "honor.jpeg",
            "itemName" : "Honor 9 Lite (Glacier Grey, 64 GB)",
            "itemConfig" : "4 GB RAM",
            "itemOfrPrice" : 14999,
            "itemRelPrice" : 16999,
            "qnty" : 1
        },
        {
            "imgName" : "watch.jpeg",
            "itemName" : "Provogue MIGHTY-030307 Watch - For Men",
            "itemConfig" : "6 Month Guarantee",
            "itemOfrPrice" : 790,
            "itemRelPrice" : 1799,
            "qnty" : 1
        }
    ]

    $scope.get_localStorage_data = JSON.parse(localStorage.getItem('localStored_data'));
    if(!$scope.get_localStorage_data){        
        localStorage.setItem('localStored_data',JSON.stringify($scope.data));
        $scope.get_localStorage_data = JSON.parse(localStorage.getItem('localStored_data'));
    }

    $scope.getTotalAmount = function(itemList){
        $scope.totalAmount = 0;
        angular.forEach(itemList, function(item) {
          $scope.totalAmount += item.itemOfrPrice * item.qnty

        });
        return $scope.totalAmount;
    }

    $scope.getTotalSaving = function(itemList){
        $scope.totalSaving = 0;
        angular.forEach(itemList, function(item) {
          $scope.totalSaving += (item.itemRelPrice * item.qnty) - (item.itemOfrPrice * item.qnty);

        });
        return $scope.totalSaving;
    }

    $scope.plusItem = function(){
        this.item.qnty += 1;
        localStorage.setItem('localStored_data',JSON.stringify($scope.get_localStorage_data));
    }

    $scope.minusItem = function(){
        this.item.qnty > 1 ? this.item.qnty -= 1 : this.item.qnty;
        localStorage.setItem('localStored_data',JSON.stringify($scope.get_localStorage_data));
    }

    $scope.changeItemQnty = function(){
        console.log(this.item.qnty)
        if(this.item.qnty == ""){
            this.item.qnty = 1;
        }
        localStorage.setItem('localStored_data',JSON.stringify($scope.get_localStorage_data));
    }

    $scope.removeItem = function(){
        if (confirm("Are you sure to delete this item ?")) {
            //var index = $scope.get_localStorage_data.indexOf(this.item);
            $scope.get_localStorage_data.splice($scope.get_localStorage_data.indexOf(this.item), 1);
            localStorage.setItem('localStored_data',JSON.stringify($scope.get_localStorage_data));
        }
    }
});