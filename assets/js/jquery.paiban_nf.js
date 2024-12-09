 var ac1_prices=[5419, 3946, 2033, 5158, 1552, 1616, 2659, 3424, 3338, 4299, 4796, 5782, 5008, 3725, 4199,
     5372, 4652, 3291, 3941, 2069, 1967, 5763, 5401, 4341, 5391, 3745, 3782, 5501, 5030, 5004]

                var ac1=[   
                "3-6歳の羊の粉ミルク(金领冠)"    ,"6-12月粉ミルク(贝因美)"       ,"粉ミルク缶"              ,"中高年の粉ミルク(URBT)" ,"粉ミルクケース携帯に便利である","子供用弁当箱（果物）",//6
                "粉ミルクの缶 スプーン付き"      ,"12-36月粉ミルク(飞鹤)"        ,"中高年の粉ミルク(伊利)"   ,"子供用粉ミルク(similac)","0-6月粉ミルク(贝因美)"        ,"6-12月粉ミルク(金领冠)",//12
                "6-12月粉ミルク(飞鹤)"          ,"12-36月粉ミルク(飞鹤)"        ,"6-12月粉ミルク(similac)" ,"粉ミルクの箱"           ,"12-36月粉ミルク(飞鹤)"       ,"1-10歳発育栄養",//18
                "6-12月粉ミルク袋入り"          ,"粉ミルクの箱"                 ,"粉ミルクの缶 スプーン付き","12-36月粉ミルク"        ,"12-36月粉ミルク"             ,"12-36月粉ミルク(friso)",//24
                "12-36月粉ミルク袋入り(friso)"  ,"粉ミルクケース携帯に便利である" ,"12-36月粉ミルク(飞鹤)"    ,"12-36月粉ミルク(飞鹤)"   ,"粉ミルク"                   ,"12-36月粉ミルク(飞鹤)2缶"];
                var ac2_prices=[5197, 3625, 4116, 3530, 4971, 5090, 3894, 4202, 2321, 4206, 4436, 1560, 1560, 3120,
                     3322, 4792, 4215, 4741, 3575, 3364, 3374, 3208, 5321, 4581, 3893, 3332, 4398, 5512, 3043, 2206]
                var ac2=[   
                    // 0-6月粉ミルク  6-12月粉ミルク 12-36月粉ミルク 36-72月粉ミルク
                "0-6月粉ミルク(金领冠)"         ,   "12-36月粉ミルク(NAN)"      ,"粉ミルク(伊利)"           ,"12-36月粉ミルク(friso)6袋入り","子供用粉ミルク"       ,"無糖粉ミルク",//6
                "36-72月粉ミルク"               ,   "3-6歳粉ミルク(金领冠)"     ,"牛乳の瓶"                 ,"0-6月粉ミルク(贝因美)"        ,"羊の粉ミルク(伊利)"   ,"牛乳の瓶(赤色)",//12
                "牛乳の瓶(黄色)"                ,   "粉ミルクタンク容量940 g"    , "12-36月粉ミルク"         ,"36-72月粉ミルク(friso)"      ,"牛乳の瓶"             ,"0-6月粉ミルク(Enfamil)",//18
                "12-36月粉ミルク"               ,   "6-12月粉ミルク 6缶"        ,"12-36月粉ミルク(friso)"   ,"6-12歳の粉ミルク"             ,"学生用粉ミルク"       ,"粉ミルクの箱 スプーン付き",//24
                "36-72月粉ミルク"               ,   "女性用高カルシウムミルク"   , "0-6月粉ミルク"           ,"6-12月粉ミルク"               ,"全脂粉乳"             ,"牛乳の瓶"];

                var ac3_prices=[1080, 1934, 4884, 3672, 4772, 3975, 1659, 5754, 5391, 3395, 5706, 4363, 5719,
                     3584, 1756, 4451, 5229, 5912, 4910, 4796, 5712, 3457, 5920, 5402, 5989, 5731, 3158, 4314, 2658, 2062]
                var ac3=[   
                "粉ミルクの箱"                  ,"牛乳の瓶"                     , "0-6月粉ミルク(NAN)"      ,"12-36月粉ミルク"              ,"12-36月粉ミルク(飞鹤)","0-6月粉ミルク(similac)",//6
                "粉ミルクの缶 スプーン付き"      ,"カルシウム入りの粉ミルク"       ,"12-36月粉ミルク"          ,"0-6月粉ミルク(金领冠)"        ,"6歳以上ミルク"        ,"36-72月粉ミルク(friso)",//12
                "6-12月粉ミルク(跃贝儿)"        ,"0-6月粉ミルク(similac)"        ,"牛乳の瓶"                 ,"36-72月粉ミルク(Herobaby)"      ,"粉ミルクの箱 スプーン付き" ,"12-36月粉ミルク(NAN)",//18
                "12-36月粉ミルク(similac)"      ," 12-36月粉ミルク(friso)"      ,"粉ミルクの缶 スプーン付き"  ,"早産児用粉ミルク(NAN)"        ,"羊の粉ミルク"         ,"12-36月粉ミルク",//24
                "中高年の粉ミルク(伊利)"        ,"6-12月粉ミルク"                ,"牛乳の瓶"                 ,"12-36月粉ミルク(伊利)"            ,"牛乳の瓶"             ,"粉ミルクの箱 スプーン付き"];
                var i = 1
                var j =3
                for (i=1;i<=30;i++)
                {
                    
        document.write('<section class="sixteen columns alpha omega portfolio">')
            document.write('<ul class="gallery">')   
                            //第一纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/nf/1/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )  //图片链接地址
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/nf/2/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/nf/3/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div><div class="overlay-details"></div></div>')                                             
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac3[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac3_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                  
            document.write('</ul>')    
        document.write('</section>')}