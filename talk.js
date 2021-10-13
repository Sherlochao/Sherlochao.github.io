$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小狐狸🍑一定会愿意的。', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('主人的要求可不能拒绝！', A);
    });
});

function A() {
    modal('好好接受！', B);
}

function B() {
    modal('不然我就给你戴上眼罩！', C);
}

function C() {
    modal('戴上手铐！', D);
}

function D() {
    modal('绑起你的腿！', E);
}

function E() {
    modal('用小皮鞭打你！', F);
}

function F() {
    modal('明白了吗！', J);
}

//function G() {
//    modal('房产证上写你名', H);
//}
//
//function H() {
//    modal('我会做饭', I);
//}
//
//function I() {
//    modal('爱你。么么哒！', J)
//}
//
function J() {
    modal('烟花开始了', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
