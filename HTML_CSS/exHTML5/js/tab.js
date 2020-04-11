// 선생님 ver1, 2 용 스크립트
// var panels = $('.board section');
// var tabs = $('.tab a');

// tabs.click(function (e) {
//     e.preventDefault(); // a태그 사용시 기본 작업인 href 링크를 초기화 시키는 코드
//     panels.removeClass('board-act');
//     $(this).parent().parent().addClass('board-act');
// });


var tabs = $('.tab-list [role="tab"]') 

tabs.on('click', function(e){
    e.preventDefault(); // a태그 사용시 기본 작업인 href 링크를 초기화 시키는 코드
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);

    var selectedId = "#"+$(this).attr('aria-controls');
	$(selectedId).addClass('section-act').siblings().removeClass('section-act');
})