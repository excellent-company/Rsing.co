 var ac1_prices=[1029, 871, 1097, 938, 1146, 888, 994, 978, 1320, 639, 944, 982, 829, 879, 1314, 1252,1274, 668, 
                 952, 1088, 878, 936, 924,737, 1312, 623, 864, 1142, 792, 940, 1214, 1368, 853, 796, 1053, 1059]

                var ac1=[   "ベッドの下掃除道具","ふた収納","茶瓶","日用品の収納","薬収納","座布団 温めることができます",//6
                "にんにくを切る道具","多機能収納","電気スタンド","キッチン収納","充電ケーブル 多機種対応","片手鍋 IH対応",//12
                "吸着ゴミ箱","喫煙用の灰皿","座布団","タイルマット","キッチンガジェット","洗面所收纳",//18
                "両面テープ","鍋皿ラック火傷防止クリップ","マグネット付き 灯","化粧品の収納","ゴムの手袋",//24
                "錆取り道具","トイレ洗剤","食器収納","掃除工具収納","台所用洗剤","掃除工具 ","日用品の収納",//30
                "粘着フック 透明 防水","ブラシ","果物と野菜の収納","スマホ/タブレット用スタンド","歯ブラシ棚","石鹸箱"];
                var ac2_prices=[1388, 1001, 951, 1354, 1499, 1196, 1153, 823, 1344, 986, 1141, 928, 1497, 897, 677, 726, 1379, 961, 
                                876, 628, 635, 1031, 1225, 725, 1398, 843, 1112, 1384, 1037, 682, 1076, 1251, 821, 719, 605, 853]

                var ac2=[   "スリッパ","シーツのハンガー","ほうき","茶器セット","カップスタンド 収納","パール金属 洗濯 物干し ハンガ",//6
                "掃除工具収納","保存容器","女の子のスリッパ","餃子の収納ボックス","フック","エプロン",//12
                "エプロン","ズボン収納","食器の収納","化粧鏡","台所用スポンジ 30個セット","野菜カッター",//18
                "常夜灯","洗面所收纳","充電ケーブル 多機種対応","石鹸箱","可愛い常夜灯","トイレ掃除 流せる",//24
                "日常品の収納","電源タップ固定器","食器","包丁研ぎ器","総飾スリッパ収納りの帯","ごみ袋",//30
                
                "野菜カッター","キッチン用品収納","ブラシ","抱き枕","足温器","バルコニー収納"];

                var ac3_prices=[655, 1332, 634, 929, 1331, 926, 1020, 1275, 1134, 716, 1266, 1216, 1052, 984, 1229, 1045, 918,1187, 
                                712, 1290, 1223, 1311, 1137, 1317, 1350, 1398, 1360, 748, 754, 1081, 1393, 1380, 971, 1051, 1205, 673]

                var ac3=[   "カップルスリッパ","スリッパ トナカイ","シンプルなスリッパ","スリッパ2足","スリッパ黒色","スリッパ灰色",//6
                "スリッパ","スリッパ 2足","スリッパ 黄色いアヒル","スリッパ","スリッパ 純白","スリッパ",//12
                "スリッパ 快適","雪靴 防寒","スリッパ","雪靴 暖かい　快適","スリッパ 5足","スリッパ",//18
                "スリッパ 防水","スリッパ","雪靴 防寒","スリッパ 子供","スリッパ ","スリッパ",//24
                "スリッパ 快適","スリッパ子供用","スリッパ","スリッパ 色は三つがある","スリッパ 音声がない","スリッパ 灰色",//30
                "可愛いスリッパ","スリッパ ブラウン","スリッパ","スリッパ","スリッパ","スリッパ"];
                var i = 1
                var j =3
                for (i=1;i<=36;i++)
                {
                    
        document.write('<section class="sixteen columns alpha omega portfolio">')
            document.write('<ul class="gallery">')   
                            //第一纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/riyong/f1/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )  //图片链接地址
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/riyong/f2/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/riyong/f3/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div><div class="overlay-details"></div></div>')                                             
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac3[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac3_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                  
            document.write('</ul>')    
        document.write('</section>')}