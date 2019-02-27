<?php
    header("Content-Type:application/json;charset=utf-8");
    require('init.php');
    @$priceMin=$_REQUEST['priceMin'] or die('-1');
    @$priceMax=$_REQUEST['priceMax'] or die('-2');
    $sql="SELECT * FROM hl WHERE i17>=$priceMin AND i17<$priceMax LIMIT 0,8";
    $result=mysqli_query($conn,$sql);
    $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str=json_encode($rows);
    echo $str;
?>