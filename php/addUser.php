<?php
    @$unum=$_REQUEST['unum'] or die('-1');
    @$upwd = $_REQUEST['upwd']or die("-2");
    require('init.php');
    $sql="INSERT INTO reg VALUES(null,'$unum','$upwd',now())";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
        echo '1';
    }else{
        echo '-4';
    }
?>