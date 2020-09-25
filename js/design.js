$(function(){
	
	

	//tab
	$('.tab_menu_wrap').each(function() {
		var tab = $(this).width();
		var li_w = $('.tab_menu_wrap li a.on').parents("li").outerWidth();
		var t = $(this).find("ul"), tW = 0;
		var tmw = $(".tab_menu_wrap").outerWidth();
		$('li', t).each(function() {
			tW += $(this).outerWidth(true);
		});
		
		if(tmw < tW) {
			t.css('width', tW);
		}

		var position = $('.tab_menu_wrap li a.on').parents("li").position().left;
		t.parents("div").scrollLeft( position - tab/2 + li_w/2);
	});

	$(".tab_scroll_menu a").click(function(){
		if($("body").hasClass("mobile")) {
			var section = $($(this).attr("href")).position().top+160;
		} else {
			var section = $($(this).attr("href")).position().top+340;
		}
		$("html, body").animate({scrollTop:section},300);
		return false;
	});

	//top
	$(".return-top").hide(); // 탑 버튼 숨김
    $(function () {
          

        //탑버튼 보이게 하기                  
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { // 원하는 윈도우 높이값 적어넣기
                $('.return-top').fadeIn();
            } else {
                $('.return-top').fadeOut();
            }
        });
               

         //탑으로 이동하기.
        $('.return-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 900);  // 탑으로 이동하는 스크롤 속도
            return false;
        });
    });

});