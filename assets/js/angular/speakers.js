function speakersCtrl($scope, $interval) 
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