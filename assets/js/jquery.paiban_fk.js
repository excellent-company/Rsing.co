 var ac1_prices=[3693, 4197, 3730, 3031, 2871, 3370, 4326, 2859, 2698, 2844, 3274, 2695, 3458, 3777, 3400, 2808, 4177, 3563, 3528, 3803, 4056, 3160,
     3830, 4230, 4017, 3581, 4018, 3204, 3613, 2730, 3472, 3135, 2835, 3516, 3916, 3494]

                var ac1=[   
                "トップス","黒いスカート","コート","セーター","ショートスカート","スカート",//6
                "Ｔシャツ","スカート","ショートスカート","正装セット","デニムジャケット ジージャン ","セーター",//12
                "スカートとセーター","コート","青いＴシャツ","ジーパン","スカート","トップス",//18
                "ズボン","ジーパン","ピンクスカート","赤いトップス","ワンピース","黒いトップス",//24
                "トップス","ジーパン","デニムのシャツ","スカート","黄色コート","赤いセーター",//30
                "トップス","デニムのシャツ","黒いトップス","赤いトップス","赤いセーター","スカート"];
                var ac2_prices=[2739, 4059, 4169, 4480, 2930, 4115, 3637, 3328, 4143, 3655, 4258, 3004, 2922, 2723, 2630, 3348, 3479, 4229, 3526, 
                    2819, 4340, 2663, 4002, 3730, 3494, 2679, 3179, 2643, 3865, 4219, 4385, 2718, 3413, 4369, 4254, 3906]

                    //白い  黒い  ピンク  茶色  スプリングコート风衣  オレンジ色  赤い
                    
                var ac2=[   "パーカー","ロンパース","カーキ色のスプリングコート","ズボン","オーバコート","オレンジ色Ｔシャツ",//6
                "ワンピース","長袖 トップス　メンズ","スプリングコート"," ショートパンツ レディース","ワンピース","迷彩服上下セット",//12
                "オーバコート","黒いトップス","白いワンピース","トップス レディース","上下セット レディース","赤いトップス",//18
                "トップス","コート","トップス","青い上着","白いコート","白いトップス",//24
                "動物 絵 トップス","トップス","トップス","スカート","上下セット レディース","赤いスカート",//30
                "白いスカート","シャツ","青いスカート","ズボン","赤いスカート","白いトップス"];

                var ac3_prices=[4249, 3557, 3555, 4386, 3177, 4367, 3733, 2991, 3505, 3576, 3203, 4353, 3691, 3855, 4277, 3650, 3178, 
                    3697, 3310, 3161, 2836, 3930, 3605, 3942, 3112, 2652, 4173, 4042, 3214, 3558, 3216, 3239, 4349, 3551, 3817, 2721]
                var ac3=[   
                "黒いショルダーバッグ","黒いクラッチバッグ ","ショルダーバッグ","ピンクブラウンのショルダーバッグ","トートバッグ","茶色のショルダーバッグ",//6
                "リュックサック","赤いリュックサック","白いクラッチバッグ","赤いクラッチバッグ","赤いクラッチバッグ","白いピンクのショルダーバッグ",//12
                "純白のショルダーバッグ","男女兼用 リュックサック","ショルダー バッグ","黄色クラッチバッグ","オレンジ色トートバッグ","リュックサック",//18
                "緑のショルダーバッグ","ピンク トートバッグ","男女兼用 黒いリュックサック","茶色とピンクのショルダーバッグ","ショルダーバッグ","赤いトートバッグ",//24
                "男女兼用 黒いリュックサック","白いリュックサック","肩掛け 帆布包","ショルダーバッグ","ショルダーバッグ","ピンクリュックサック",//30
                "白いのショルダーバッグ","白い帆布包","黒いクラッチバッグ","リュックサック","ショルダーバッグ","ショルダーバッグ"];
                var i = 1
                var j =3
                for (i=1;i<=36;i++)
                {
                    
        document.write('<section class="sixteen columns alpha omega portfolio">')
            document.write('<ul class="gallery">')   
                            //第一纵列
                document.write('<li class="portfolio-item web" data-id="id-1">')
                document.write('<div class="portfolio-item-holder">')
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/fk/e1/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )  //图片链接地址
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/fk/e2/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
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
                document.write('<a class="img_preview" title="Aquatica portfolio"><img src="images/fk/e3/'+i+'.jpg" alt="Aquatica portfolio" class="dotted_bg" /></a>' )                             
                document.write('<div class="overlays"><div class="overlay-details-black"></div><div class="overlay-details"></div></div>')                                             
                document.write('<div class="databox">')
                document.write('<p style="font-size:20px;" align="center">'+ac3[i-1]+'</p>')
                document.write('<p style="color:red;font-size:14px;" align="center">価格:￥'+ac3_prices[i-1]+'円(税込)</p>')
                document.write('</div>')
                document.write('</div>')
                document.write('</li>')                  
            document.write('</ul>')    
        document.write('</section>')}