<?php

//引入conect.php文件，连接数据库

    /*
        接口功能:
            从数据库获取商品数据
        所需参数：
                商品的id值

     */
    include "conect.php";

    //接收前端发送过来的请求
    
    $qty = isset($_GET['qty'])?$_GET['qty']:null;

    //从数据库中获取所有的商品信息
    $sql = "select * from wy_goods" ;

    //查询前设置编码，防止输出乱码
            $conn ->set_charset('utf8');

    //执行sql语句
    //获取查询结果集
    $result = $conn->query($sql);
        

   

    //使用查询结构集..
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //截取所要的数据长度
    $arr =array_slice($row,0,$qty);


    echo json_encode($arr)



?>