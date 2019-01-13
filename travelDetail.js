function open_land(site) {
  $(site).addClass('fadeIn');

  $(site).addClass('animate_content_visible');

  $('.lightbox_hidden').addClass('lightbox_visible');

  setTimeout(function() {
    $(site).removeClass('animate_content_visible');
  }, 1600);
}

function close_land(site) {
  $(site).addClass('animate_content_hidden');
  $('.lightbox_hidden').removeClass('lightbox_visible');

  setTimeout(function() {
    $(site).removeClass('animate_content_hidden');
    $(site).removeClass('fadeIn');
  }, 1000);

}