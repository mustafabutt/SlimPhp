<?php
                 require __DIR__.'/vendor/autoload.php';
                 $app = new Slim\Slim();
                  require '/controller/teacher.php';
                     $app->response->headers->set('Content-Type', 'application/json');
                     $app->get('/teacher', ('teacherList'));
                     $app->post('/teacher',('teacherCreate'));
                     $app->get('/teacher/:id',('teacherRead'));
                     $app->put('/teacher/:id',('teacherUpdate'));
                    $app->delete('/teacher/:id',('teacherDelete'));
             
                 $app->run();
  