<?php
    //引入conect.php
    include 'conect.php';
    /*
    
     接口功能：验证用户名是否存在

    需要参数：
            uesername

     */

    $number = isset($_GET['number']) ? $_GET['number'] : null;

    //从数据库中是否存在同名用户
    $sql = "select * from sign_data where number='$number'";

    // var_dump($sql);
    //执行sql语句
    $result = $conn->query($sql);

    // var_dump($number);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>