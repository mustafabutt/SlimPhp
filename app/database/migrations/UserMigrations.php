<?php
                     use Illuminate\Database\CapsuleManager as Capsule;
                     class UserMigration {
                         function run()
                         {
                             
                             Capsule::schema()->dropIfExists('teacher');
                             Capsule::schema()->create('teacher', function($table) {
   
                                 															$table->increments('id');
  															$table->string('username');
  															$table->string('email');
  															$table->string('age');
  
                             });
                         }
                     }
     