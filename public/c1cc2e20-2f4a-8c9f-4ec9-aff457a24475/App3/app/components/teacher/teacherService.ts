/// <reference path="../../app.routes.ts" /> 
                                /// <reference path="../../../assets/typings/angular-resource.d.ts" />  
                                 module App3 { 
                                  export class teacherSvc { 
                                 constructor() {} 
                                 public getName($resource) {
                                 var url = "http://localhost/SlimPhp/index.php/teacher/:Id"; 
                                 return $resource(url, null,{ 
                                 "update":{  
                                   method:"PUT" }, 
                                 }) 
                                  } 
                                 } 
                                 } 
                                 app.factory("teacherService",() => { 
                                    return new  App3.teacherSvc(); 
                                 }); 
                                 