$(document).ready(function(){
  $('.exp_drop').click(function(){
  	// if any other drop_info has shown, hide it 
  	if($('#'+$(this).data('drop-no')).is(':visible')==0){
  		$('.drop_info').hide();
  	}
  	$('#'+$(this).data('drop-no')).toggle();
  });
});