/*
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$html = $('html');

	// Breakpoints.
		breakpoints({
			large:   [ '981px',  '1680px' ],
			medium:  [ '737px',  '980px'  ],
			small:   [ '481px',  '736px'  ],
			xsmall:  [ null,     '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			
			// Get all my information from the database to show in the page
			$.get("https://delightful-stack-k2dxr.cloud.serverless.com/data", {},
                function(response) {
					for (name_property in response.data){
                    	$("#my_"+name_property).html(response.data[name_property])
						if (response.data[name_property].constructor.name == "Array"){
							$("#my_"+name_property).html('') // Empty the div
							for (element of response.data[name_property]){
								$("#my_"+name_property).append(
									'<h3>'+element.company+'<strong> - '+element.position+'</strong></h3><p>'+element.summary+'</p>'
								)
							}
						}
					}
                }
            );


			// Get the last 5 tweets of a Twitter account
			$.get("https://delightful-stack-k2dxr.cloud.serverless.com/tweets", {},
                function(response) {
					tweets = ''
					for (tweet of response.data){
						tweet = tweet.charAt(0).toUpperCase() + tweet.slice(1) // capitalize the first letter of the tweet
						tweets += '<p>' + tweet + '</p>' 
					}
					$("#my_tweets").html(tweets)
					$("#my_twitter_account").html('@'+response.account)
					$("#my_twitter_account").attr('href','https://twitter.com/'+response.account)
                }
            );

			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Send data from the contact form 
	$('#my_form').submit( (event)=>{
		event.preventDefault()
		$.post("https://delightful-stack-k2dxr.cloud.serverless.com/contact", {
			name: $("#name").val(),
			email: $("#email").val(),
			message: $("#message").val()
		},
		async (response)=>{
			$("#name").val('')
			$("#email").val('')
			$("#message").val('')
			$("#send").attr('value','Thank you!')
			$("#message").attr('placeholder', 'Message sent successfully')
			await wait(3000)
			$("#send").attr('value','Send Message')
			$("#message").attr('placeholder', 'Message')
		})

	})

	function wait(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

	// Touch mode.
		if (browser.mobile) {

			var $wrapper;

			// Create wrapper.
				$body.wrapInner('<div id="wrapper" />');
				$wrapper = $('#wrapper');

				// Hack: iOS vh bug.
					if (browser.os == 'ios')
						$wrapper
							.css('margin-top', -25)
							.css('padding-bottom', 25);

				// Pass scroll event to window.
					$wrapper.on('scroll', function() {
						$window.trigger('scroll');
					});

			// Scrolly.
				$window.on('load.hl_scrolly', function() {

					$('.scrolly').scrolly({
						speed: 1500,
						parent: $wrapper,
						pollOnce: true
					});

					$window.off('load.hl_scrolly');

				});

			// Enable touch mode.
				$html.addClass('is-touch');

		}
		else {

			// Scrolly.
				$('.scrolly').scrolly({
					speed: 1500
				});

		}

	// Header.
		var $header = $('#header'),
			$headerTitle = $header.find('header'),
			$headerContainer = $header.find('.container');

		// Make title fixed.
			if (!browser.mobile) {

				$window.on('load.hl_headerTitle', function() {

					breakpoints.on('>medium', function() {

						$headerTitle
							.css('position', 'fixed')
							.css('height', 'auto')
							.css('top', '50%')
							.css('left', '0')
							.css('width', '100%')
							.css('margin-top', ($headerTitle.outerHeight() / -2));

					});

					breakpoints.on('<=medium', function() {

						$headerTitle
							.css('position', '')
							.css('height', '')
							.css('top', '')
							.css('left', '')
							.css('width', '')
							.css('margin-top', '');

					});

					$window.off('load.hl_headerTitle');

				});

			}

		// Scrollex.
			breakpoints.on('>small', function() {
				$header.scrollex({
					terminate: function() {

						$headerTitle.css('opacity', '');

					},
					scroll: function(progress) {

						// Fade out title as user scrolls down.
							if (progress > 0.5)
								x = 1 - progress;
							else
								x = progress;

							$headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

					}
				});
			});

			breakpoints.on('<=small', function() {

				$header.unscrollex();

			});

	// Main sections.
		$('.main').each(function() {

			var $this = $(this),
				$primaryImg = $this.find('.image.primary > img'),
				$bg,
				options;

			// No primary image? Bail.
				if ($primaryImg.length == 0)
					return;

			// Create bg and append it to body.
				$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
					.css('background-image', (
						'url("assets/css/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
					))
					.appendTo($body);

			// Scrollex.
				$this.scrollex({
					mode: 'middle',
					delay: 200,
					top: '-10vh',
					bottom: '-10vh',
					init: function() { $bg.removeClass('active'); },
					enter: function() { $bg.addClass('active'); },
					leave: function() { $bg.removeClass('active'); }
				});

		});

})(jQuery);