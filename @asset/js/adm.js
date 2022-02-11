$(document).ready(function () {
    const $btnConfirm = $('.confirm');
    const $wrapper = $('.frame-inner');
    const $confirm = $('<div class="confirm-box">저장 되었습니다</div>')

    $btnConfirm.on('click', function (e) {
        e.preventDefault();
        $wrapper.append($confirm);
        let timeout = setTimeout(function () {
            $confirm.remove();
        }, 1500);
    });


});
