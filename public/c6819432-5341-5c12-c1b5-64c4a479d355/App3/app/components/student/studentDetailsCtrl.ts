module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: studentDetailsCtrl;  
                                 } 
                                   export class studentDetailsCtrl { 
                                 public item:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,studentService,$resource,$stateParams,$location){ 
                                 $scope.vm = this; 
                                 studentService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                                   $scope.vm.item = item; 
                                 }); 
                                 } 
                                 } 
                                 } 
  