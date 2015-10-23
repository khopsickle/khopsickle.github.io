$(document).ready(function() {
  $('.portfolio-item').hover(function() {
      $(this).find('.portfolio-title').fadeIn(300);
  }, function() {
      $(this).find('.portfolio-title').fadeOut(100);
  });
});
