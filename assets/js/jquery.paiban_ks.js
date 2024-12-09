 var ac1_prices=[269, 130, 120, 208, 118, 103, 329, 132, 344, 267, 117, 179, 167, 316, 265, 279, 114, 283, 
                 095, 282, 182, 113, 197, 233, 174, 227, 127, 216, 151, 342, 107, 115, 256, 304, 331, 339]
                var ac1=[   
                    //化粧水　乳液  シートマスク  クリーム 霜  洗顔フォーム
                "スキンケアセット 化粧水+乳液+シートマスク+洗顔フォーム","スキンケアセット 化粧水+乳液+シートマスク+クリーム","                             ",
                "                             ","                             ","                              ",//6
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//12
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//18
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//24
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//30
                "                            ","                             ","                             ",
                "                             ","                             ","                              "];
                var ac2_prices=[298, 220, 295, 366, 407, 155, 400, 340, 325, 388, 309, 442, 429, 115, 185, 116, 371, 193,
                                232, 159, 342, 118, 228, 127, 415, 321, 294, 255, 113, 413, 447, 417, 432, 267, 225, 306]
                var ac2=[   
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//6
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//12
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//18
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//24
                "                            ","                             ","                             ",
                "                             ","                             ","                              ",//30
                "                            ","                             ","                             ",
                "                             ","                             ","                              "];

                var ac3_prices=[635, 238, 285, 576, 177, 264, 123, 260, 574, 363, 126, 554, 217, 616, 254, 434, 303, 215, 
                                429, 403, 612, 454, 167, 523, 097, 179, 212, 308, 474, 503, 205, 424, 471, 466, 229, 125]
                var ac3=[   
                    "                            ","                             ","                             ",
                    "                             ","                             ","                              ",//6
                    "                            ","                             ","                             ",
                    "                             ","                             ","                              ",//12
                    "                            ","                             ","                             ",
                    "                             ","                             ","                              ",//18
                    "                            ","                             ","                             ",
                    "                             ","                             ","                              ",//24
                    "                            ","                             ","                             ",
                    "                             ","                             ","                              ",//30
                    "                            ","                             ","                             ",
                    "                             ","                             ","                              "];
                var i = 1
                var j =3
                for (i=1;i<=36;i++)
                {
                    
        document.write('<section class="sixteen columns alpha omega portfolio">')
            document.write('<ul class="gallery">')   
                            //第一纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ks/c1/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )  //图片链接地址
                document.write('<div class="overlays"><div class="overlay-details-black"></div> <div class="overlay-details"></div></div>')                                              
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac1[i-1]+'</p>')//商品描述
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac1_prices[i-1]+'円(税込)</p>')//商品价格
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')              
                            //第二纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ks/c2/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div> <div class="overlay-details"></div></div>')                                            
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac2[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac2_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                
                            //第三纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ks/c3/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div><div class="overlay-details"></div></div>')                                             
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac3[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac3_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                  
            document.write('</ul>')    
        document.write('</section>')}