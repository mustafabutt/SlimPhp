module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: studentEditCtrl;  
                                 } 
                                 export class studentEditCtrl { 
                                 public save;item;editItem:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,studentService,$resource,$stateParams,$location){ 
                                 $scope.vm = this; 
                                 studentService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                                   $scope.vm.editItem = item; 
                                 }); 
                                 this.save = function () { 
                                 var item = $scope.vm.editItem; 
                                 studentService.getName($resource).update({ Id: $stateParams.id },item, function (result) { 
                                 $location.path("/student"); 
                             }); 
                                 } 
                                 } 
                                 } 
                                 }  