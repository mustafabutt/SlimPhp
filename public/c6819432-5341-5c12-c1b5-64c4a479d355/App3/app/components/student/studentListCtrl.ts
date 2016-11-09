module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: studentListCtrl;  
                                 } 
                                   export class studentListCtrl { 
                                 private list:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,studentService,$resource,$stateParams){ 
                                 $scope.vm = this; 
                                 studentService.getName($resource).query({},function (list, headers) { 
                                 $scope.vm.list = list; 
                                 }); 
                                 } 
                                 } 
                                 } 
  