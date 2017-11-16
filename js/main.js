$(function(){
	// this is github main js file copied from 2017-08-08-local main.js
	var speed = 300;
	
	var $aside = $('body').find('aside');
	var $animated = $('body').find('.animated');
    //投稿に影をつけるアニメーション
	var $rightwrap = $('body').find('.page-main').find('.infos').find('.right-wrapper');
	var $itemhover = $('body').find('.page-main').find('.market').find('.item').find('a');
	
	// スティッキーヘッダー
	$('body').find('nav').each(function(){

		var $window = $(window),
			$nav = $('body').find('nav'),

			navOffsetTop = $nav.offset().top;

		$window.on('scroll',function(){

			if($window.scrollTop() > navOffsetTop){
				$nav.addClass('sticky');
			} else {
				$nav.removeClass('sticky');
			}
		});
		$window.trigger('scroll');
	});
    // スライド用のアニメーション
	var $asideButton = $aside.find('.humb-box')

			.on('click',function(){
				$aside.toggleClass('open');
				if($aside.hasClass('open')){
					$aside.stop(true).animate({
						left:'0px'
					}, speed,'easeInBack');
					$animated.addClass('window-shadow');
					$animated.removeClass('window-shadow-else');
				} else{
					$aside.stop(true).animate({
						left:'-300px'
					}, speed,'easeOutBack');
					$animated.removeClass('window-shadow');
					$animated.addClass('window-shadow-else');
				}
			});

});