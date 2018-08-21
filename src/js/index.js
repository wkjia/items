
    ;(function(){
        jQuery(function($){
            //获取lbt中所有的ul
         var $arr = $('.lbt').find('ul');
         var length = $arr.length;
         //获取ul的宽度
         var sum = 0;
         var num=[];
         $.map($arr,function(item,idx){

                 sum = $(item).outerWidth()*length;
                 num.push(idx)

             })
            var $width = (Math.ceil(sum));

                //设置lbt的宽度
            $('.lbt').css('width',$width);

            //console.log($num)
                    var $init = 1090;

            //轮播图点击事件
            $('.i_prev').on('click',function(){
                setInterval(function(){
                    var $speed = -10;
                     $init += $speed;
                     
                     // console.log($init)
                },300)
           
           // console.log($arr.eq(1))

        })


        //右边的侧栏动画
        //获取弹框离右边的定位距离
        var pr = $('.user').offset();
        var  user_d = $('.user').outerWidth(true);
        //计算user的右边偏移距离
        var distance = pr.left + user_d;
        var max_width =  $('#theme').outerWidth(true);
        var right_d = max_width - distance -9;
        
        // 绑定事件
        $('.gr').on('mouseover',$('.i_c1'),function(){
                
        })
    })

})();