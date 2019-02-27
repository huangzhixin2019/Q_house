<?php
header('Content-Type: application/json');

session_start();
@$uid = $_SESSION['loginUid'];
if(!$uid){
    die('{"code":402, "msg":"login required"}');
}

require('init.php');
$sql = "SELECT unum FROM reg WHERE uid=$uid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if(!$row){
    echo -1;
}else{
    echo json_encode($row);
}


