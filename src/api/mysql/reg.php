<?php

    //引入conect.php
    include 'conect.php';

   /*
   接口功能：用户注册

            将用户注册信息写入数据库
    所需参数
            username
            password
    */
    $username = isset($_POST['username'])?$_POST['username']:null;
    $password = isset($_POST['password'])?$_POST['password']:null;
    
     $conn ->set_charset('utf8');

    $sql = "insert into sign_data(password,username) value('$password','$username')";

    var_dump($sql);

    //执行sql语句//查询结果集
    $result = $conn->query($sql);

    if($result){
        echo 'success';
    }else{
        echo 'fail';
    }
?>
   