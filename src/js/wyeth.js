        
        (function(){
            jQuery(function($){

            //ajax请求
                 $.ajax({
                        type:'get',
                        url:'../api/mysql/weyth.php',
                        data:{
                                qty:19,
                        },
                        dataType:'json',
                        success:function(xhr){
                            //接受后端返回的数据
                            console.log(xhr)
                            
                            xhr.map(function(item,idx){
                                //图片的名称
                                var res = `${item.URL}.jpg`

                                    $('.gd2').append(show)
                                    function show(){
                                        return  `<li class="fl gdl gdl${idx}">
                                        <dl>
                                        <dt><a herf="#"><img src="../img/weyth/${res}" class="img${idx}"/></a></dt>
                                        <dd>
                                            <p class ="goods_name">
                                                <a href="#" class="traceCount" target="_blank" title="${item.name}">
                                                    ${item.name}
                                                    <span class="font-red" data-ProductMemo='title'>
                                                        
                                                    </span>
                                                </a>
                                            </p>

                                            <p class="price_wrap">
                                                <span class="price_now">
                                                    ${item.price}￥
                                                </span>
                                            </p>

                                            <p>
                                                <span class="btn_m btn_m_o">
                                                    <a class="list02_con_submit" pidorg="574565" promid="15912" data-price="185.00"  name="0" sort="0" href="#;">加入购物车
                                                    </a>
                                                </span>
                                                <span class="btn_m btn_m_g">
                                                    <a class="sc" pidorg="574565" promid="0"  href="#;">收藏
                                                    </a>
                                                </span>
                                            </p>

                                        </dd>
                                        </dl>
                                                </li>`

                                    }

                            })

                        }
                })

        //手风琴效果
        
        //获取th2下面所有的dd、dt元素

        $('.th2').on('mouseover','dl',function(){

                $('dt').css({"display":"block"});
                $('dd').css({"display":"none"});
                $(this).find("dt").css({"display":"none"})

                $(this).find("dd").css({"display":"block"})

        })



            })
        })()

