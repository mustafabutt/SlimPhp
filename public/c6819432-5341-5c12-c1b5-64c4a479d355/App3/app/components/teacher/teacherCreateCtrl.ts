module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: teacherCreateCtrl;  
                                 } 
                                   export class teacherCreateCtrl { 
                                 public addNew:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,teacherService,$resource,$location){ 
                                 $scope.vm = this; 
                                 this.addNew = function () { 
                                 teacherService.getName($resource).save(this.newItem, function (result) { 
                                 $location.path("/teacher"); 
                                 }); 
                                 } 
                                 } 
                                 } 
                                 }  