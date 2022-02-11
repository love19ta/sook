$(document).ready(function () {
    const $allSelect = $('.inp-select');

    $(document).on('click', '.btn-select, .inp-select a', function (e) {
        const _this = $(this);
        const hasSelectBtn = _this.hasClass('btn-select');
        const $parent = _this.closest('.inp-select');
        const $btn = $parent.find('.btn-select');
        const $valBtn = $parent.find('ul');

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
