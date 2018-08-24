;(function(){

    jQuery(function($){
     
        
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
                }

                //手机号码输入状态判断
               if(!/^1[3,9]\d{9}$/.test(res)){
                     $(this).next(".p1").css({'display':'block'})
                     $(this).nextAll(".img_f").css({'display':'none'})
                }
                if(/^1[3,9]\d{9}$/.test(res) & $(this).val()!=''){      
                     $(this).next(".p1").css({'display':'none'})
                     $(this).nextAll(".img_f").css({'display':'block'})
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

                                if(shuzi.test(num)){
                                     $(this).nextAll(".psw3").css({'display':'none'})
                                    $(this).nextAll(".psw").css({'display':'block'})
                                }
                                if(zimu.test(num)){
                                    $(this).nextAll(".psw").css({'display':'none'})
                                    $(this).nextAll(".psw2").css({'display':'block'})
                                }
                                if(fuhao.test(num)){
                                    $(this).nextAll(".psw2").css({'display':'none'})
                                    $(this).nextAll(".psw3").css({'display':'block'})
                                }
                            }
  
               }
            //以上是密码强度判断
                
       })  
    })
})();