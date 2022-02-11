const base_url = '..'
const modals = (function () {
    let $wrap = $('#wrap');
    let $modals = $('<div class="modal" />');

    const open = function (el) {
        if ($modals == null) $modals = $('<div class="modal" />');

        let modalCode = $(el).data('modal');

        $wrap.append($modals);
        $modals.load(base_url + '/modals/' + modalCode + '.html .modal-inner', function () {
            setTimeout(function () {
                $modals.addClass('show');
                let $btnClose = $modals.find('.modal_close');
                $btnClose.focus();
            }, 500);
        });

    }
    const close = function () {
        $modals.removeClass('show');
        setTimeout(function () {
            $modals.remove();
            $modals = null;
        }, 500);
    }

    return {
        open: open,
        close: close
    }
})();

$(document).ready(function () {

    $('.btn_modal').on('click', function (e) {
        e.preventDefault();
        modals.open(this);
    });

    $('#wrap').on('click', '.modal_close', function (e) {
        e.preventDefault();
        modals.close();
    });

});