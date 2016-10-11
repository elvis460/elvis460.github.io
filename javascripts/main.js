$(document).ready(function(){
  $('.exp_drop').click(function(){
    $('#'+$(this).data('drop-no')).toggle();
  });
});