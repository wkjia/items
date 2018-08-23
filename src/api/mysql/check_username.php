<?php
    //引入conect.php
    include 'conect.php';
    /*
    
     接口功能：验证用户名是否存在

    需要参数：
            uesername

     */

    $username = isset($_GET['username']) ? $_GET['username'] : null;

    //从数据库中是否存在同名用户
    $sql = "select * form sign_data where username='$username'";

    //执行sql语句
    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>