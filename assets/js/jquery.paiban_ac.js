 var ac1_prices=[1029, 871, 1097, 938, 1146, 888, 994, 978, 1320, 639, 944, 982, 829, 879, 1314, 1252,1274, 668, 
                 952, 1088, 878, 936, 924,737, 1312, 623, 864, 1142, 792, 940, 1214, 1368, 853, 796, 1053, 1059]

                var ac1=[   "銀のネックレス S925","バラゴールドのネックレス","中国風の置物（客間の飾り物）","牛の干支プレゼント","携帯収納ボックス中国風(木造)","真鍮製の古典的な筆筒",//6
                "子供の中国風の髪飾り","琵琶のペンダント","黑木かんざし","貔貅ペンダント","新年のテーマペンダント","髪飾り(3つ色がある)",//12
                "机の置物","収納ボックス","小さな木箱","髪飾り（ペア）","十二干支の銅像","指輪のペンダント",//18
                "腕輪","総ピアス","山水画 壁掛け 部屋飾り","三角形のピアス","風景画 現代壁の絵 壁掛け","変面の仮面",//24
                "髪飾り","化粧箱","子供のピアス","壁掛け ","ブレスレット","中国風メガネケース",//30
                "腕輪S925","油紙の傘","3D壁紙 コイ","子供のヘアピン","山水画 部屋飾り","3D壁紙 牡丹"];
                var ac2_prices=[1388, 1001, 951, 1354, 1499, 1196, 1153, 823, 1344, 986, 1141, 928, 1497, 897, 677, 726, 1379, 961, 
                                876, 628, 635, 1031, 1225, 725, 1398, 843, 1112, 1384, 1037, 682, 1076, 1251, 821, 719, 605, 853]

                var ac2=[   "キーホルダー（福運）","花の形のピアス","トナカイの置物","禅味置物","新年のテーマピアス","アクセサリーケース",//6
                "赤いピアス","神話の人形　牛魔王","新年の壁画","小さな置物","かんざし","中国の髪飾り　步摇",//12
                "総飾り髪飾り","腕輪 純銀 冷淡なスタイル","かんざし バラ","部屋の置物","総飾り髪飾り","純銀 腕輪",//18
                "髪飾り２つ","服のストラップ","総飾りペンダント","扇子 置物","総飾りの帯","うちわのブローチ",//24
                "絹のスカーフ","油紙の傘シーリングランプ","狐指輪","山水画置物","茶器の収納","木のかんざし",//30
                "額縁","収納木箱","花のブローチ","中国風扇子","木かんざし","耳飾り"];

                var ac3_prices=[655, 1332, 634, 929, 1331, 926, 1020, 1275, 1134, 716, 1266, 1216, 1052, 984, 1229, 1045, 918,1187, 
                                712, 1290, 1223, 1311, 1137, 1317, 1350, 1398, 1360, 748, 754, 1081, 1393, 1380, 971, 1051, 1205, 673]

                var ac3=[   "可愛いい庭の飾り","回転式 ピアス","総飾りピアス","置物　桃の木","ネックレス","総飾りペンダント",//6
                "山水画の置物","総ペンダント緑色","鈴のブローチ","紅玉の腕輪","髪飾り","扇子",//12
                "ブレスレット","漢字ペンダント","中国結びピアス","ブローチ","ブローチ ペア","琵琶の置物",//18
                "かわいい髪飾り","めのうの腕輪","三国の人形","中国の髪飾り 步摇","部屋飾り 人物画","車のペンダント",//24
                "髪飾り","カチューシャ","メタルの腕輪","3D立体蝶","壁の装飾品","新年のピアス",//30
                "髪飾り ペア","携帯ペンダント","かんざし","いちょうの葉かんざし","車のペンダント","木造かんざし"];
                var i = 1
                var j =3
                for (i=1;i<=36;i++)
                {
                    
        document.write('<section class="sixteen columns alpha omega portfolio">')
            document.write('<ul class="gallery">')   
                            //第一纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ac/ac1/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )  //图片链接地址
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ac/ac2/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/ac/ac3/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div><div class="overlay-details"></div></div>')                                             
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac3[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac3_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                  
            document.write('</ul>')    
        document.write('</section>')}