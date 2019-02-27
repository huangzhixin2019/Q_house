<?php

    header("Content-Type:application/json;charset=utf-8");
    @$val=$_REQUEST['val'] or die('-1');
    require('init.php');
    $sql="SELECT i1 FROM hl WHERE i1 LIKE '%$val%' LIMIT 0,5";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
    if($row){
        $str=json_encode($row);
        echo $str;
    }else{
        echo 1;
    }
    ?>
