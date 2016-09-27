<?php

require("Slim/Slim.php");
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->post('/teste/', function () use ($app) {
	$request = \Slim\Slim::getInstance()->request();
	$data = json_decode($request->getBody());

	if(empty($data->token) || empty($data->secret) || empty($data->nome) || empty($data->email) ) {
		$app->response->setStatus(500);
	}
	else {
		$json = array("data"=>$data);
		echo json_encode($json);
	}

});

$app->run();
