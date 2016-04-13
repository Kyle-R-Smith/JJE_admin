Template.checkout.onCreated( () => {
  let template = Template.instance();
  
  template.selectedService  = new ReactiveVar( false );
  template.processing = new ReactiveVar( false );
});

Template.checkout.helpers({
  processing() {
    return Template.instance().processing.get();
  }
});

Template.checkout.events({
  'click [data-service]' ( event, template ) {
    const pricing = {
      'full-torso-apparition': {
        amount: 2000,
        description: "Academy"
      },
      'free-floating-repeater': {
        amount: 1000,
        description: "Instructor"
      },
      'full-roaming-vapor': {
        amount: 5000,
        description: "Public"
      }
    };

    let service = pricing[ event.target.dataset.service ];

    template.selectedService.set( service );
    template.processing.set( true );

    template.checkout.open({
      name: 'BJJ Elite',
      description: service.description,
      amount: service.amount,
      bitcoin: true
    });
  }
});