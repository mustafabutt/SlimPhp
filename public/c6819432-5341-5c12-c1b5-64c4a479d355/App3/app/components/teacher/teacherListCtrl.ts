module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: teacherListCtrl;  
                                 } 
                                   export class teacherListCtrl { 
                                 private list:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,teacherService,$resource,$stateParams){ 
                                 $scope.vm = this; 
                                 teacherService.getName($resource).query({},function (list, headers) { 
                                 $scope.vm.list = list; 
                                 }); 
                                 } 
                                 } 
                                 } 
  