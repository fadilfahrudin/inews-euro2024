function toggleTab(n) {
    for (i = 0; i < $('.tabs').length; i++) {
        $('.tabs').eq(i).hide()
    }
    $('.tabs').eq(n).show()
}

function oncopy() {
    document.oncopy = function () {
        var title = $(".news-detail").find("h1:first").text();
        if (title == '') {
            var title = $(".news-photos-detail").find("h2:first").text();
        }
        if (title == '') {
            var title = $(".news-videos-detail").find("h2:first").text();
        }
        var t = title,
            e = document.location.href;
        var r,
            d = document.getElementsByTagName("body")[0],
            p =
                (r = window.getSelection()) +
                '<br /><br /> Artikel ini telah tayang di <a href="' + document.location.hostname + '">' + document.location.hostname + '</a> dengan judul "' +
                t +
                '", Klik untuk baca: <a href="' +
                e +
                '">' +
                e +
                "</a>. <br />" +
                '<br /> <br /> Download aplikasi <a href="https://www.inews.id/">Inews.id</a> untuk akses berita lebih mudah dan cepat:<br /><a href="https://www.inews.id/apps">https://www.inews.id/apps</a>',
            s = document.createElement("div");
        (s.style.position = "absolute"),
            (s.style.left = "-99999px"),
            d.appendChild(s),
            (s.innerHTML = p),
            r.selectAllChildren(s),
            window.setTimeout(function () {
                d.removeChild(s);
            }, 0);
    };
}

/* v2 */

$("#btn-search-sticky ul").hide();
// $(window).scroll(function () {
//     var scrollY = $(this).scrollTop();
//     var nav = $('.main-menu').height() + $('.top-header').height();

//     if (scrollY >= nav) {
//         $(".top-wrapper").addClass("hidden");
//         $(".top-header").addClass("sticky");
//         $(".main-menu").addClass("sticky");
//         $(".header-quickcount").addClass("sticky");
//     } else {
//         $(".top-header").removeClass("sticky");
//         $(".main-menu").removeClass("sticky");
//         $(".top-wrapper").removeClass("hidden");
//         $(".header-quickcount").removeClass("sticky");
//     }
// });

$("#btn-search-sticky a").click(function (e) {
    e.preventDefault();
    var className = $('#btn-search-sticky a i').attr('class');
    if (className == 'fa fa-search') {
        $('#btn-search-sticky a').html('<i class="fa fa-times-circle" aria-hidden="true"></i>');
        $("#btn-search-sticky ul").show(200);
    } else {
        $('#btn-search-sticky a').html('<i class="fa fa-search" aria-hidden="true"></i>');
        $("#btn-search-sticky ul").fadeOut(200);
        $("#btn-search-sticky ul li input").val('');
    }
});

$(".btn-sidebar-right").click(function () {
    $(".sidebar-right").removeClass("open");
    $(".login-popup").removeClass("show-popup");
    var target = $(this).attr("data-target");
    $("." + target).addClass("open");
});

$(".btn-sidebar-close").click(function () {
    var target = $(this).attr("data-target");
    $("." + target).removeClass("open");
    if (target == "sidebar-right-network") {
        $(".kanal-wrapper").removeClass("open");
        $(".kanal-regional").removeClass("open");
        $(".kanal-network").addClass("hidden");
    }
});

$(".kanal-regional").click(function () {
    $(".kanal-wrapper").removeClass("open");
    $(".kanal-regional").removeClass("open");
    $(".kanal-network").addClass("hidden");

    var target = $(this).attr("data-target");
    $(this).addClass("open");
    $(this).parent().addClass("open");
    $(target).removeClass("hidden");
});

$(".btn-show-menu").click(function () {
    if ($("#show_menu_reg").hasClass("hidden")) {
        $(".btn-show-menu").addClass("open");
        $("#show_menu_reg").removeClass("hidden");
    }
    else {
        $(".btn-show-menu").removeClass("open");
        $("#show_menu_reg").addClass("hidden");
    }
});

$(".btn-show-menu-2").click(function () {
    if ($("#show_menu_reg_2").hasClass("hidden")) {
        $(this).addClass("open");
        $("#show_menu_reg_2").removeClass("hidden");
    }
    else {
        $(this).removeClass("open");
        $("#show_menu_reg_2").addClass("hidden");
    }
});

// $("#show_menu_reg").mouseleave(function(){
//     $(this).addClass("hidden");
//     $(".btn-show-menu").removeClass("open");
// });

var SwiperNetwork = new Swiper(".SwiperNetwork", {
    autoplay: {
        delay: 3000
    },
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    pagination: {
        el: ".swiper-pagination-network",
        clickable: true,
    },
});

$("ul.nav li.dropdown").hover(
    function () {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(1).fadeIn(1);
    },
    function () {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(1).fadeOut(1);
    }
);

// Popup Timesignal script 
// open
setTimeout(() => {
    $('.timesignalWrapper').addClass('timesignalActive');
}, 500)

// Set button close
setTimeout(() => {
    $('.timesignalClose').css('display', 'block');
}, 30000)

// close popup
$('.timesignalClose').click(() => {
    $('.timesignalWrapper').removeClass('timesignalActive');
    setTimeout(() => {
        $('.timesignalWrapper').remove();
    }, 500)
})
// EndPopup Timesignal script 