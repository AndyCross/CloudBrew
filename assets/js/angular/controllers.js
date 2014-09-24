function circularDrunkCtrl($scope, $interval) 
{
	$scope.drunkenness = 0;

	$interval(function() { 
		$scope.drunkenness = $scope.drunkenness + Math.floor((Math.random()*3)+1);
		if ($scope.drunkenness > 360)
		{
			$scope.drunkenness = 0;
		}
	}, 
	200);
}

function linearDrunkCtrl($scope, $interval) 
{
	$scope.drunkenness = 1.0;
	$scope.max=10;
	$scope.decrease = false;

	$interval(function() { 
		var randomDelta = Math.floor((Math.random()*2));

		if ($scope.drunkenness >= $scope.max)
		{
			$scope.decrease = true;
		}

		if ($scope.drunkenness == 0)
		{
			$scope.decrease = false;
		}

		if ($scope.decrease)
		{
			randomDelta = randomDelta * -1;
		}

		$scope.drunkenness = $scope.drunkenness + randomDelta;
	}, 
	200);

	$interval(function(){
		$scope.max++;
	}, 5000);
}