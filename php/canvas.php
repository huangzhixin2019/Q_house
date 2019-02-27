<?php
    header("Content-Type:application/json;charset=utf-8");
    require('init.php');
    $sql="SELECT * FROM canvas";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str=json_encode($row);
    echo $str;
?>