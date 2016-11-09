module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: teacherDetailsCtrl;  
                                 } 
                                   export class teacherDetailsCtrl { 
                                 public item:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,teacherService,$resource,$stateParams,$location){ 
                                 $scope.vm = this; 
                                 teacherService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                                   $scope.vm.item = item; 
                                 }); 
                                 } 
                                 } 
                                 } 
  