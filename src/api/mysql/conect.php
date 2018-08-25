<?php
    /*连接数据库
            
            1、配置连接
            2、创建连接
            

    */
    
    //配置连接参数
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "sign in";

    //连接到数据库（把数据库的信息进行传递）
    $conn = new mysqli($servername, $username, $password, $dbname);

        // var_dump($conn);
    //（检测连接）判断数据库是否连接成功(php中操作面向对象的方法)
        if($conn->connect_error){
            //失败时输出信息并结束连接
           die("连接失败: " . $conn->connect_error);
        };

        //查询前设置编码，防止输出乱码
            $conn ->set_charset('utf8');

        //执行sql语句，用于查询结果集
        
        $sql = "select username,password from sign_data";

        //获取查询结果集  //num_rows保存查询到的记录数量
        $result = $conn->query($sql);
      
      /*  
       //使用查询结果集
        //得到数组
        $row = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row)

        //释放查询结果集，避免资源浪费
        $result->close();

         //把结果输出到前台
        echo json_encode($row);

        // 关闭数据库，避免资源浪费
        $conn->close();
        */
?>