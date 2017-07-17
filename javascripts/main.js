$(document).ready(function(){
  $('.exp_drop').click(function(){
  	$('.drop_info').hide()
    $('#'+$(this).data('drop-no')).toggle();
  });
});