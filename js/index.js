$(function () {
    $('.main').fullpage({
        navigation: true,
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#6faa85", "#84d9ed"],
        afterLoad: function (a, index) {
            
            // css动画的添加和清除
            $('.section').removeClass('animation').eq(index -1).addClass('animation');

            // 因为每次添加的动画样式都是行内样式 所以每次滚动先清除所有的style的行内样式
            $('.section img,.section>div div').attr('style','');
            // 清除未完成的动画效果
            $('.section img,.section>div div').stop();

            // 第二屏动画
            if (index == 2) {
                $('.section2 .search1').animate({
                    marginLeft: -111
                }, 1000, 'easeOutBack', function () {
                    // 回调函数中更换搜索框图片
                    $('.section2 .search1').hide();
                    $('.section2 .search2').show();
                    // 设置计时器让下面动画延迟0.5秒后运行
                    setTimeout(function () {
                        $('.section2 .search2').animate({
                            marginLeft: 200,
                            bottom: 450,
                            height: 30
                        }, 1000);
                        $('.section2 .sofas').animate({
                            height: 218,
                            opacity: 1
                        }, 1000);
                    },500)
                });
            }

            // 第四屏动画 
            if (index == 4){
                $('.section4 .carBox').animate({marginRight: -1200},2000,'easeInElastic',function(){
                    $('.section4 .keyboard').fadeIn(500);
                })
            }
            // 第六屏动画
            if(index == 6){
                $('.section6 .sofabox').animate({bottom: 100},2000,function(){
                    $('.section6 .bg').animate({marginLeft: -3550},10000,'swing',function(){
                        $('.section6 .man').animate({height: 130},1000,function(){
                            $('.section6 .man').delay(500).animate({left: 255},2000,function(){
                                $('.section6 .door, .section .women').show();
                            })
                        })
                    });
                })
            }

            // 第八屏动画
            if(index == 8){
                // 获取窗口的高度
                var height = $(window).height();
                // console.log(height);
                $('.section8').mousemove(function(event){
                    var x = event.pageX - $('.hand').width()/2 + 20;
                    var y = event.pageY + 55;
                    // console.log(x+'||'+y);
                    // 获取bottom值  总高 - 鼠标当前的y轴 - 图片的总高
                    var bottom = (height - y) - $('.hand').height();
                    // console.log(bottom);
                    if (bottom >= 0) bottom = 0;
                    $('.section8 .hand').show().css({left: x,bottom: bottom})
                })


                $('.section8 .again').click(function(){
                    $.fn.fullpage.moveTo(1);
                })
            }

        }
    })
})