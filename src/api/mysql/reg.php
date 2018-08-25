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
    $number = isset($_GET['number'])?$_GET['number']:null;
    $password = isset($_GET['password'])?$_GET['password']:null;
    
     $conn ->set_charset('utf8');

    $sql = "insert into sign_data(number,password) value('$number',$password)";



    //执行sql语句//查询结果集
    $result = $conn->query($sql);

    if($result){
        echo 'success';
    }else{
        echo 'fail';
    }
?>
   