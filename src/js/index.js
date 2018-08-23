
    ;(function(){
        jQuery(function($){

    //登录注侧框的显示和隐藏
    $('.i_c1').hover(function(){
             $('.user').show();
             $('.sign').show();
             $('.u-box').show();
             $('.i_c1').addClass('gl')
             $(".user").animate({right: '45px'}, "fast");
             $(".sign").animate({right: '45px'}, "fast");
             console.log('appear')


           
            
        
             // var timer = setInterval(function,30)
        },
            function(){
                 $('.user').hide();
                 $('.sign').hide();
                  setTimeout(function(){
                
                   $('.u-box').hide();
                 
         },3000)
                 $('.i_c1').removeClass('gl')
                 console.log('disappear')
            }

    )

        $('.u-box').hover(function(){
             $('.user').show();
             $('.sign').show();
             console.log('appear')

                 // var timer = setInterval(function,30)
            },
            function(){
                 $('.user').hide();
                 $('.sign').hide();
                 $(".user").animate({right: '60px'}, "fast");
                 $(".sign").animate({right: '60px'}, "fast");
                 console.log('disappear')
            }
            
    )

         $('.i_c2').hover(function(){
                 $('.i_c2').addClass('gl')
            },
            function(){
                 $('.i_c2').removeClass('gl')
            }
            
    )
         
         $('.i_c4').hover(function(){
                 $('.i_c4').addClass('gl')
            },
            function(){
                 $('.i_c4').removeClass('gl')
            }
            
    )

   

     //收藏注册框的显示和隐藏
        $('.i_c4').hover(function(){
             $('.luser').show();
             $('.lsign').show();
             $('.l-box').show();
             $('.i_c4').addClass('gl')
             $(".luser").animate({right: '45px'}, "fast");
             $(".lsign").animate({right: '45px'}, "fast");
             // var timer = setInterval(function,30)
        },
            function(){
                 $('.luser').hide();
                 $('.lsign').hide();
                 setTimeout(function(){
                
                   $('.l-box').hide();
                 
         },3000)
                 $('.i_c4').removeClass('gl')
            }

    )

        $('.l-box').hover(function(){
             $('.luser').show();
             $('.lsign').show();
               
                
                   $('.l-box').show();

            },
            function(){
                 $('.luser').hide();
                 $('.lsign').hide();
                 
                
                   $('.l-box').hide();
                 
                 $(".luser").animate({right: '60px'}, "fast");
                 $(".lsign").animate({right: '60px'}, "fast");
            }
            
    )

        $('.i_c5').hover(function(){
            $('.consult').animate({right: '36px'}, "fast");
        },function(){
            $('.consult').animate({right: '60px'}, "fast");
        })

    // 返回顶部效果
    
    //获取目标元素
    var  toTop = $('.i_c6');
    //console.log(toTop)
    //点击返回顶部效果
    toTop.on('click',function(){

        var timer = setInterval(function(){

            var  speed = Math.ceil(window.scrollY/5);

            scrollBy(0,-speed);

            if(window.scrollY <= 0){
                clearInterval(timer);
            }
        },30)
    })


    //屏幕滚动触发事件，左侧二维码的显示隐藏效果
    var leftTop = $('.leftimg');
    $(window).scroll(function(){
       
                if(window.scrollY > 150){
                    leftTop.fadeIn("slow");
                     
                }else{
                    leftTop.fadeOut("slow");
                    
                }

    })
    //点击切换分页
     //获取lbt中所有的ul
         var arr = $('.lbt').find('ul');
         var page = arr.length;

    //计算轮播图的总宽度
        var lbt_width = Math.ceil($('.lbt ul').outerWidth(true)*page);

    //设置轮播图的总宽度
        $('.lbt').css({'width':lbt_width});
    
    //点击向前或者向后切换分页
    
    //向前切换分页

        var i = 0;
    $('.i_next').click(function(){
        if(i>=page){
            i = 0 
        }
                i++
        
       

            //计算图片的移动宽度
            var speed = -50;
            var timer = setInterval(function(){

             var  num = $('.lbt').css('left')

             var a_num = (num.slice(0,-2))*1
              a_num += speed;
          
           

            $('.lbt').css({'left':a_num})
                console.log(-(i*$('.lbt ul').outerWidth(true)))
            if(a_num <=-(i*$('.lbt ul').outerWidth(true))){
                    clearInterval(timer)
                //重置目标值
                var target = -(i*$('.lbt ul').outerWidth(true))

            $('.lbt').css({'left':target})
            }
            if(a_num<= -lbt_width){

                $('.lbt').css({'left':0})

                console.log(666)
            }
         },10)
        
    })
    

   

 })
})();

