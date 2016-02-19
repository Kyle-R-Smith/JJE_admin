let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _setAdmins();
};

let _setEnvironmentVariables = () => {
  let settings = Meteor.settings.private;
   process.env.MAIL_URL = "smtp://postmaster%40sandboxf33e20c784a14af8ace93e99c1778eb2.mailgun.org:550e3ef2d34b9126e828aa81919f2837@smtp.mailgun.org:587";
  
};

let _setBrowserPolicies = () => {};

let _generateAccounts = () => Modules.server.generateAccounts();

let _setAdmins = () => Modules.server.setAdmins();

Modules.server.startup = startup;
