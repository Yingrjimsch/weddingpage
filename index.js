function open_doors(siteToRedirect) {
  if (siteToRedirect == 'weddingDetail.html') {
    console.log('Hello')
    $('.html').addClass('redirectToWeddingPage');
  }
  else {
    $('.html').addClass('redirectToTravelPage');
  }
  console.log("Test");
  $('.door_left').toggleClass('door_left_open');
  $('.door_right').toggleClass('door_right_open');
  $('.door_btn').toggleClass('door_btn_open');
  setTimeout(function() {
    document.location.href = siteToRedirect;
  }, 2000);
}
