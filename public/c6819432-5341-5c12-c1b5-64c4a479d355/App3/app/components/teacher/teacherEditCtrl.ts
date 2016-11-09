module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: teacherEditCtrl;  
                                 } 
                                 export class teacherEditCtrl { 
                                 public save;item;editItem:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,teacherService,$resource,$stateParams,$location){ 
                                 $scope.vm = this; 
                                 teacherService.getName($resource).get({ Id: $stateParams.id }, function (item) { 
                                   $scope.vm.editItem = item; 
                                 }); 
                                 this.save = function () { 
                                 var item = $scope.vm.editItem; 
                                 teacherService.getName($resource).update({ Id: $stateParams.id },item, function (result) { 
                                 $location.path("/teacher"); 
                             }); 
                                 } 
                                 } 
                                 } 
                                 }  