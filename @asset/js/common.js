$(document).ready(function () {
    calcVh();
});

$(window).on('resize', function () {
    calcVh();
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