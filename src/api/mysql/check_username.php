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
    
//查询前设置编码，防止输出乱码
            $conn ->set_charset('utf8');

    // var_dump($sql);
    //执行sql语句
    $result = $conn->query($sql);


    //获取查询结果集
    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>