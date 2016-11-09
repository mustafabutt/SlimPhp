module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: teacherDeleteCtrl;  
                                 } 
                                 export class teacherDeleteCtrl { 
                                 public delete;item;deleteItem:any;
                                 public editItem:any; 
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,teacherService,$resource,$stateParams,$location){ 
                                 $scope.vm = this; 
                                 teacherService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                                   $scope.vm.deleteItem = item; 
                                 }); 
                                 this.delete = function () { 
                                 teacherService.getName($resource).delete({ Id:$stateParams.id }, function (result) { 
                                 $location.path("/teacher") 
                                 }); 
                                 } 
                                 } 
                                 } 
                                 }  