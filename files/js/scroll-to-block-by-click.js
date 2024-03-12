document.addEventListener('DOMContentLoaded', function() {
    let headerHeight = document.querySelector('.header-container').offsetHeight;

    document.getElementById('to-block-one').addEventListener('click', function() {
        let block_one = document.getElementById('block-one');
        if (block_one) {
            var oneOffset = block_one.offsetTop - headerHeight;
            window.scrollTo({
                top: oneOffset,
                behavior: 'smooth'
            });
        }
    });
    document.getElementById('to-block-second').addEventListener('click', function() {
        let block_second = document.getElementById('block-second');
        if (block_second) {
            var secondOffset = block_second.offsetTop - headerHeight;
            window.scrollTo({
                top: secondOffset,
                behavior: 'smooth'
            });
        }
    });
    document.getElementById('to-block-three').addEventListener('click', function() {
        let block_three = document.getElementById('block-three');
        if (block_three) {
            var threeOffset = block_three.offsetTop - headerHeight;
            window.scrollTo({
                top: threeOffset,
                behavior: 'smooth'
            });
        }
    });
});

/*
document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('.header-container').offsetHeight;
    var blocks = document.querySelectorAll('.js-scroll-to-block');

    blocks.forEach(function(block) {
        block.addEventListener('click', function() {
            var targetId = this.getAttribute('data-to');
            var targetBlock = document.querySelector('[data-from="' + targetId + '"]');
            if (targetBlock) {
                var targetOffset = targetBlock.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
*/

/*
$(document).ready(function(){
    $('.possibility__item').on('click', function() {
        var target = $(this).data('target');
        var headerHeight = $('.header-container').outerHeight(); // Получаем высоту .header-container
        var targetOffset = $('[data-from="' + target + '"]').offset().top - headerHeight; // Вычитаем высоту .header-container из позиции прокрутки
        $('html, body').animate({
            scrollTop: targetOffset // Прокручиваем к элементу с учетом высоты .header-container
        }, 1000);
    });
});
*/