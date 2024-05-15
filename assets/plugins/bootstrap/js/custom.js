$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeIn(1);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeOut(1);
});