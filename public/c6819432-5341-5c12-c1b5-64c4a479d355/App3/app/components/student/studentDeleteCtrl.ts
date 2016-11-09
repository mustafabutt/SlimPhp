module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: studentDeleteCtrl;  
                                 } 
                                 export class studentDeleteCtrl { 
                                 public delete;item;deleteItem:any;
                                 public editItem:any; 
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,studentService,$resource,$stateParams,$location){ 
                                 $scope.vm = this; 
                                 studentService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                                   $scope.vm.deleteItem = item; 
                                 }); 
                                 this.delete = function () { 
                                 studentService.getName($resource).delete({ Id:$stateParams.id }, function (result) { 
                                 $location.path("/student") 
                                 }); 
                                 } 
                                 } 
                                 } 
                                 }  