<?php

require("Slim/Slim.php");
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->post('/teste/', function () use ($app) {
	$request = \Slim\Slim::getInstance()->request();
	$data = json_decode($request->getBody());

	if(empty($data->token) || empty($data->secret)) {
		$app->response->setStatus(500);
		$json = array("response"=>"ERROR","data"=>"API Token or API Secret invalid!");
	}
	else {
		$json = array("response"=>"OK","data"=>$data->nome);
	}
	
	echo json_encode($json);
});

$app->run();
