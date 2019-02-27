<?php
header("Content-Type:application/json;charset=utf-8");
@$unum=$_REQUEST['unum'] or die('-1');
require('init.php');
$sql="SELECT * FROM reg WHERE unum='$unum'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//如果用户名或密码有误返回NULL
if($row===NULL){
    echo '-3';
}else{
    echo '1';
}
?>