
    ;(function(){
        jQuery(function($){
            //获取lbt中所有的ul
         var $arr = $('.lbt').find('ul');
         var $length = $arr.length;
         //获取ul的宽度
         var $sum = 0;
         var $num=[];
         $.map($arr,function(item,idx){

                 $sum = $(item).outerWidth()*$length;
                 $num.push(idx)

             })
        var $width = (Math.ceil($sum));

                //设置lbt的宽度
         $('.lbt').css('width',$width);

        //console.log($num)

            $('.i_prev').on('click',function(){
                setInterval(function(){
                    var $speed = -10;
                    var $init = 1090;
                     $init = $init+$speed;
                     console.log($init)
                },300)
           
           console.log($arr.eq(1))
        })

        })

})();