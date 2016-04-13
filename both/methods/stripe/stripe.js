Meteor.methods({
  'chargeCard': function(stripeToken) {
    var Stripe = StripeAPI('sk_test_wzVlkTYLZFCALxtZFUK9bl3E');

    Stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});
