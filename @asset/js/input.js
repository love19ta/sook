$(document).ready(function () {

    calcVh();

    $(document).on('click', '.btn-select, .inp-select a', function (e) {
        const _this = $(this);
        const hasSelectBtn = _this.hasClass('btn-select');
        const $parent = _this.closest('.inp-select');
        const $btn = $parent.find('.btn-select');
        const $valBtn = $parent.find('ul');
        const $allSelect = $('.inp-select');

        const btnSelect = {
            show: function () {
                $btn.addClass('on');
                $valBtn.addClass('show');
            },
            hide: function () {
                $btn.removeClass('on');
                $valBtn.removeClass('show');
            },
            allHide: function () {
                $allSelect.each(function () {
                    let _this = $(this);
                    _this.find('.btn-select, ul').removeClass('on show');
                });
            },
            setText: function ($this) {
                $btn.text($this.text());
            }
        }

        if (hasSelectBtn) {
            if (_this.hasClass('on')) {
                btnSelect.hide();
            } else {
                btnSelect.allHide();
                btnSelect.show();
            }
        } else {
            btnSelect.setText(_this);
            btnSelect.hide();
        }
    });

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