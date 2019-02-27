<?php
    header("Content-Type:application/json;charset=utf-8");
    require('init.php');
    @$pageNo=$_REQUEST['pageNo'];
    @$priceMin=$_REQUEST['priceMin'] or die('-1');
    @$priceMax=$_REQUEST['priceMax'] or die('-2');
    @$position=$_REQUEST['position'] or die('-3');
    $offset=($pageNo-1)*8;
    $sql="SELECT * FROM hl WHERE i17>=$priceMin AND i17<$priceMax AND i1 LIKE '%$position%' LIMIT $offset,8";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str = json_encode($row);
    echo $str;
?>