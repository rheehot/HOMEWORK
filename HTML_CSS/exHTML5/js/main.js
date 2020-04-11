var menu = $('.menu');
var items = $('.menu-item');
var icons = $('.submenu a');
icons.attr('class', 'icon-dot-circled');


items.on('click keyup focus', function(e){
    if (e.type === 'click' ||
       (e.type === 'keyup' && e.keyCode === 13) ||
       e.type === 'focus'
       ) {
        items.removeClass('menu-act');
        $(this).addClass('menu-act');
    }
    
});