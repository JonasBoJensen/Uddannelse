$(document).ready(function($){
	if (Modernizr.localstorage) {
		$('#hide-button').click(function(e){
			localStorage.setItem('subscribed',true);
			$('#sign-up-form,#hide-button').slideToggle();
			$('#hide-button').hide();
			$('#show-button').show();
		});

		$('#show-button').click(function(e){
			localStorage.setItem('subscribed', false);
			localStorage.clear();
			$('#sign-up-form').slideToggle();
			$('#hide-button').show();
			$('#show-button').hide();
		});

		var is_subscribed = localStorage.getItem('subscribed');

		if(is_subscribed){
			$('#sign-up-form,#hide-button').slideToggle();
		}

		if(!is_subscribed){
			$('#sign-up-form').show();
			$('#show-button').hide();
		}
	}
});