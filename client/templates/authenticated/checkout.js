Template.checkout.events({
  'submit': function( event, template ) {
    ccNum = '1234-4567-9012'; //$('#ccnum').val();
    cvc = '123'; // $('#cvc').val();
    expMo = 3; //$('#exp-month').val();
    expYr = '2020'; $('#exp-year').val();

    Stripe.card.createToken({
	    number: ccNum,
	    cvc: cvc,
	    exp_month: expMo,
	    exp_year: expYr,
    }, function(status, response) {
	    stripeToken = response.id;
	    Meteor.call('chargeCard', stripeToken);
    });
  }
});
