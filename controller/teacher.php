<?php 
header('Access-Control-Allow-Origin: *');
include './app/models/teacher.php';
function teacherList() { 
$user = new teacher;
print $user->all();
}; 
function teacherCreate() {
global $app;
$obj = json_decode(($app->request->getBody())); 
														 
$username = $obj->username; 
$email = $obj->email; 
$password = $obj->password; 

$user = new Teacher; 
															 
$user->username =$username; 
$user->email = $email; 
$user->password = $password; 

$user->save(); 
echo 'User Created'; 
}; 
function teacherRead($id){ 
$user = new teacher; 
print $user->find($id); 
};
function teacherUpdate($id){
global $app;
$obj = json_decode(($app->request->getBody()));
															//$id = $obj->id; 
$username = $obj->username; 
$email = $obj->email; 
$password = $obj->password; 

$user = new teacher; 
$getOne= $user->find($id);
															//$getOne->id = $id; 
$getOne->username = $username; 
$getOne->email = $email; 
$getOne->password = $password; 

$getOne->save();
echo "User Updated";
};                           
function teacherDelete($id){
$user=new teacher;
$getOne= $user->find($id);
$getOne->delete($id); 
echo"Delete";
};
