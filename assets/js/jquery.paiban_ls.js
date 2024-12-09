 var ac1_prices=[320, 441, 424, 550, 552, 618, 348, 383, 408, 214, 329, 218, 534, 396, 564, 324, 246, 378, 
    422, 269, 414, 434, 415, 340, 516, 606, 585, 318, 507, 407, 308, 284, 210, 599, 494, 341]

                var ac1=[   
                "どら焼き"        ,"豚足","碧根果500 g","青豌豆","お菓子セット","アヒルの丸煮",//6
                "牛肉のトマト春雨","ショートケーキ","落花生500g","牛板筋 辛口","肉松","アヒルの丸煮",//12
                "膨化食品","辛口　辣条 ","豆乾 豆腐加工品","ミックスナッツ","海苔","キャンデー",//18
                "焼菓子","クッキー 1kg","小鸡腿","ウエハース","スニッカーズ","かっぱえびせん",//24
                "鳕鱼片","辣醤","かりかりビスケット","ビスケット","オレオビスケット","お菓子セット",//30
                "ブルーベリージャムパン","ミックスナッツ","牛乳パン","ウメの実","ナッツ種子 瓜子","ビスケットセット"];
                var ac2_prices=[554, 305, 257, 488, 526, 607, 590, 491, 376, 260, 427, 353, 612, 253, 487,
                     392, 505, 591, 594, 498, 478, 464, 468, 293, 435, 225, 514, 204, 497, 330, 465, 412, 242, 608, 296, 433]
                var ac2=[   
                "チップクッキー","ケーキ","豚肉(麻辣)","月餅 ギフト包装","米餅","卵が入ったパン",//6
                "面製品 麻辣味 大辣片","東坡肉缶詰","チーズケーキ","チーズ酥","旺旺 仙貝","八寶",//12
                "チップクッキー","チョコナッツクッキー","瓜子 ナッツ種子 五香味","クッキーセット","オレオケット","甘栗",//18
                "クッキー","蒸しケーキ","オートミールクッキー","海苔ケット","チーズケーキ","酸辣春雨",//24
                "にんにくの香りケット","豆腐加工品","食物繊維クッキー","果丹皮","瓜子 ナッツ種子","お菓子セット",//30
                "紅豆蛋黄酥 中華菓子","パン","ミックスナッツ"," 蝦條 子供のころの味","チョコレート","チップクッキー"];

                var ac3_prices=[511, 331, 308, 234, 296, 620, 343, 484, 570, 323, 512, 566, 354, 269, 575, 523, 201, 344, 385,
                     249, 339, 413, 509, 391, 423, 552, 508, 366, 430, 245, 612, 428, 501, 467, 567, 384]

                var ac3=[   
                "中国名物 锅巴","鲜花饼 菓子","クッキーセット","チョコレートクッキー","食 置き換えダイエット","牛肉の粒",//6
                "ポテトチップス","肉粒","クッキー","マファール 麻花","お菓子セット","中華菓子",//12
                "クッキー","中華菓子セット","マファール 麻花","ドリアン 果干","麺製品のスパイシーな味","スニッカーズ",//18
                "ポテトチップス","中国名物 小米锅巴","ポテトチップス（乐事）","オレオビスケット","鲜花饼 100個","ポテトチップス",//24
                "乳酸菌パン","チョコレートケーキ","オートミール酥","辣条 魔芋爽 ","麻辣麺製品","マファール 麻花",//30
                "ポテトチップス（乐事）3本","チョコレート30%","チョコレート70%","ポテトチップス10袋あります","ウエハース","大人気 肉干肉脯"];
                var i = 1
                var j =3
                for (i=1;i<=36;i++)
                {
                    
        document.write('<section class="sixteen columns alpha omega portfolio">')
            document.write('<ul class="gallery">')   
                            //第一纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ls/d1/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )  //图片链接地址
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ls/d2/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ls/d3/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div><div class="overlay-details"></div></div>')                                             
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac3[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac3_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                  
            document.write('</ul>')    
        document.write('</section>')}