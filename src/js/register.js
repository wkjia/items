;(function(){

    jQuery(function($){
     
        var isOk = false;

        //点击提交注册
        $('.submit').click(function(){
            if(!isOk){
                    return false;
            }
            console.log($('.img_f').css('display'))
            if($('.nb1').val()==''||$('.pawd1').val()==''||$('.pawd2').val()==''){
                return false;
            }
            if($('.img_f').css('display')!='none'&&$('.d2-p').css('display')!='none'||$('.dd').css('display')!='none'){

                //获取手机号码和密码
                 var passwords = $('.pawd1').val();
                 var numbers = $('.nb1').val();

                //ajax请求，将用户信息写入数据库
                 $.ajax({
                        type:'get',
                        url:'../api/mysql/reg.php',
                        data:{
                                number:numbers,
                                password:passwords,
                        },
                        success:function(xhr){
                            //接受后端返回的数据
                            console.log(xhr)
                        }
                })
            }
        })


        //判断用户是否已经存在
        $('.nb1').blur(function(){
            var numbers = $('.nb1').val();
                $.ajax({
                    type:'get',
                    url:'../api/mysql/check_username.php',
                    data:{
                            number:numbers
                    },
                    success:function(xhr){
                        //在接收后端返回的数据
                        console.log(xhr)
                       if(xhr=="no"){
                        $('.img_f').css({'display':'none'})
                         $('.p12').css({'display':'block'})
                            isOk=false;
                        console.log('已经存在')
                       }
                       if(xhr=="yes"){
                        // $('.img_f').css({'display':'block'})
                            if($('.nb1').val()==''){
                                return false;
                            }
                         $('.p12').css({'display':'none'})
                            isOk=true;
                            console.log('注册')
                       }
                    }
                    

                })
        })
     //点击时实现边框高亮效果
       $(document).on('click','input',function(){
            
                $(this).addClass("active");
       })

    //去除边框的高亮效果、判断输入框的状态 
       $(document).on('blur','input',function(){

        
  
                $(this).removeClass("active");
                var res = $(this).val();


                //判断所有输入框的空值状态
                if($(this).val()==''){
                     $(this).next(".p1").css({'display':'block'}) 
                      $(this).nextAll(".p10").css({'display':'none'})
                     $(this).nextAll(".dd").css({'display':'none'})
                   
                }

                //手机号码输入状态判断
               if(!/^1[3,9]\d{9}$/.test(res)){
                     $(this).next(".p1").css({'display':'block'})
                     $(this).nextAll(".img_f").css({'display':'none'})
                      $(this).nextAll(".p12").css({'display':'none'})
                }
                if(/^1[3,9]\d{9}$/.test(res) & $(this).val()!=''){      
                     $(this).next(".p1").css({'display':'none'})
                     $(this).nextAll(".img_f").css({'display':'block'})
                      $(this).nextAll(".p12").css({'display':'none'})
                     
                }


                //判断密码输入状态判断
               if(/^\s.{4,18}\s$/.test(res)){
                    $(this).nextAll(".p3").css({'display':'block'})
                    $(this).nextAll(".d2-p").css({'display':'none'})
                     $(this).next(".ps1").css({'display':'none'})
               }
               if(!/^\S.{4,18}\S$/.test(res)){
                    console.log(res)
                    $(this).next(".ps1").css({'display':'block'})
                     $(this).nextAll(".d2-p").css({'display':'none'})
                    
               }


               if(/^\S.{4,18}\S$/.test(res)){
                    $(this).next(".ps1").css({'display':'none'})
                    $(this).nextAll(".p3").css({'display':'none'})
                    // var reg = /[~!@#\$%^&*\(\)\{\};,.\?\/'"A-Za-z\d]{6,20}/
                    var shuzi = /\d/
                    var zimu = /[A-Za-z]/
                    var fuhao = /[~!@#\$%^&*\(\)\{\};,.\?\/'"]/

                    var reg1=/^[~!@#\$%^&*\(\)\{\};,.\?\/'"A-Za-z\d][~!@#\$%^&*\(\)\{\};,.\?\/'"A-Za-z\d]{4,18}[~!@#\$%^&*\(\)\{\};,.\?\/'"A-Za-z\d]$/
                    var str = res.match(reg1);
                    var arr = str[0]
                   
                        for(i=0;i<arr.length;i++){
                                var num = arr.charAt(i);

                                if(shuzi.test(num)||zimu.test(num)||fuhao.test(num)){
                                     $(this).nextAll(".psw3").css({'display':'none'})
                                    $(this).nextAll(".psw").css({'display':'block'})
                                    if(zimu.test(num)&&fuhao.test(num)){
                                        $(this).nextAll(".psw").css({'display':'none'})
                                        $(this).nextAll(".psw2").css({'display':'block'})
                                    }
                                    if(shuzi.test(num)&&zimu.test(num)&&fuhao.test(num)){
                                        $(this).nextAll(".psw2").css({'display':'none'})
                                        $(this).nextAll(".psw3").css({'display':'block'})
                                    }
                                }
                            }
  
               }

               //判断重复密码框的值跟上一次输入是否符合
               
            var passwords = $('.pawd1').val();
            var a_passwords = $('.pawd2').val();
                console.log(passwords)
                console.log(a_passwords)
               if(passwords!=a_passwords&&a_passwords!=''){
                $(this).nextAll(".p10").css({'display':'block'})
                 $(this).nextAll(".dd").css({'display':'none'})
                $(this).nextAll(".p1").css({'display':'none'})
                console.log(555)
                
            }
                if(passwords==a_passwords&&a_passwords!=''){
                    $(this).nextAll(".p10").css({'display':'none'})
                    $(this).nextAll(".dd").css({'display':'block'})
                     $(this).nextAll(".p1").css({'display':'none'})
                     console.log(333)
            }

            //以上是密码强度判断
            
            //以下的是根据数据库数据进行状态判断
            //判断手机号码是否已经注册过
            //用户注册信息
            

       })  
            
        


    })
})();