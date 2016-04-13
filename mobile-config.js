App.accessRule('https://*.stripe.com/*');

var handler = StripeCheckout.configure({
		key: 'pk_test_fIjVEbsrXAoHwyDXVbCqyFo8',
		token: function(token) {}
	});