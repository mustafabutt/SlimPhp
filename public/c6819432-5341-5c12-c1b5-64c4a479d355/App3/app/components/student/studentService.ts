/// <reference path="../../app.routes.ts" /> 
                                /// <reference path="../../../assets/typings/angular-resource.d.ts" />  
                                 module App3 { 
                                  export class studentSvc { 
                                 constructor() {} 
                                 public getName($resource) {
                                 var url = "http://localhost/SilexPhp/index.php/student/:Id"; 
                                 return $resource(url, null,{ 
                                 "update":{  
                                   method:"PUT" }, 
                                 }) 
                                  } 
                                 } 
                                 } 
                                 app.factory("studentService",() => { 
                                    return new  App3.studentSvc(); 
                                 }); 
                                 