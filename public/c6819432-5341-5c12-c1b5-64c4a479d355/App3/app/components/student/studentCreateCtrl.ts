module App3 { 
                                 interface AppControllerScope extends ng.IScope{  
                                 vm: studentCreateCtrl;  
                                 } 
                                   export class studentCreateCtrl { 
                                 public addNew:any;
                                 private $inject=["$scope"]; 
                                 constructor($scope:AppControllerScope,studentService,$resource,$location){ 
                                 $scope.vm = this; 
                                 this.addNew = function () { 
                                 studentService.getName($resource).save(this.newItem, function (result) { 
                                 $location.path("/student"); 
                                 }); 
                                 } 
                                 } 
                                 } 
                                 }  