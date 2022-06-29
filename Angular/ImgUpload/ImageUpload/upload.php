<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json, charset=utf-8');
header('Access-Control-Allow-Credentials: true');

$target_dir = "uploads/";
$image_name = basename($_FILES["fileToUpload"]["name"]);
$target_file = $target_dir.basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if (file_exists($target_file)){
    $msg = 'File already exists';
    $uploadOk = 0;
}

if ($_FILES["fileToUpload"]["size"] > 500000) {
    $msg = 'Your file is too large';
    $uploadOk = 0;
}

if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif"){
    $msg = 'Only picture formats';
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    $msg = 'Sorry, file was not uploaded';
    echo '{"error": "'.$msg.'"}';
}
else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)){
        
        //echo $first_name = $POST['first_name'];
        //echo $last_name = $POST['last_name'];
        //echo $email = $POST['email'];
        //echo $image_name = 'image_name';
        //INSERT INTO users (first_name. last_name, email, iamge)
        //VALUES ('$first_name', '$last_name'. '$email', '$image_name' )
        
        echo '{"Success": "File has been uploaded"}';
    }
    else {
        echo '{"Failure": "File has not been uploaded"}';
    }
}

?>