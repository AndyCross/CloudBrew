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
	$scope.max=100;

	$interval(function() { 
		$scope.drunkenness = $scope.drunkenness + Math.floor((Math.random()*2));
		if ($scope.drunkenness > $scope.max)
		{
			$scope.drunkenness = 0;
		}
	}, 
	200);
}