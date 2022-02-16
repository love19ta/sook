$(document).ready(function () {
    calcVh();
    tab();
});

$(window).on('resize', function () {
    calcVh();
}).on('load', function(){
    setTimeout(function(){
        $('.frame-inner').show();
    }, 0);
});

function calcVh() {
    if (window.frameElement != null) {
        let outerH = $('.frame').height();
        let innerH = $('.frame-inner').outerHeight();
        // let calc = Math.max(Math.min((outerH / innerH), 1), 0);
        let calc = Math.max((outerH / innerH), 0);

        $(":root").css({ '--inner-scale': calc });
    } else {
        let winH = window.parent.window.innerHeight;
        let winW = window.parent.window.innerWidth;
        $(":root").css({ '--vh': winH, '--vw': winW });

    }
}

function tab(){
    const $wrap = $('.frame-inner');
    const $tabBtn = $('.frame-header button.title');
    const $tabCont = $wrap.find('.cont');

    $tabCont.eq(0).addClass('active');
    $tabBtn.eq(0).addClass('active');

    $tabBtn.on('click', function(e){
        console.log('in');
        e.preventDefault();
        const _this = $(this);
        let idx = _this.index();

        _this.addClass('active').siblings().removeClass('active');

        $tabCont.siblings().removeClass('active');
        $tabCont.eq(idx).addClass('active');
    })
}