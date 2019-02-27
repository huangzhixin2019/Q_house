<?php
$conn = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,"app_qfangwang");
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
?>