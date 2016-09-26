<?php

require("Slim/Slim.php");
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->get('/teste/', function () use ($app) {
	$data = array();

	$data[] = array(
		"id" => 10,
		"nome" => "Gustavo Kons de Souza",
		"email" => "gustavokons1@gmail.com",
		"senha" => "gks300991"
		);


	$json = array("response"=>"ERRO","data"=>$data);
	$app->response->setStatus(500);
	echo json_encode($json);
});

$app->run();
