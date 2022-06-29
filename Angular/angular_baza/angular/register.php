<?php
include_once("db_connect.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $f_name = trim($request -> f_name);
    $s_name = trim($request -> s_name);
    $email = mysqli_real_escape_string($mysqli, trim($request -> email));
    $password = mysqli_real_escape_string($mysqli, trim($request -> password));
    $mobile = trim($request -> mobile);

    $sql = "INSERT INTO loginregister (f_name, s_name, email, password, mobile) VALUES ('$f_name','$s_name','$email','$password','$mobile')";

    if ($mysqli -> query($sql)){

        $data = array('message' => 'success');
        echo json_encode($data);
    }
    else {
        $data = array('message' => 'failed');
        echo json_encode($data);
    } 
}
?>