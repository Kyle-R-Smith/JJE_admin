let administrators = [
  {
    name: { first: 'Test', last: 'Admin' },
    email: 'admin@jje.com',
    password: 'password'
  }
];

let managers = [
  {
    name: { first: 'Test', last: 'Instructor' },
    email: 'instructor@jje.com',
    password: 'password'
  }
];

let users = [
  {
    name: { first: 'Test', last: 'Individual' },
    email: 'individual@jje.com',
    password: 'password'
  }
];

let generateAccounts = () => {
  let fakeUserCount = 5,
      usersExist    = _checkIfAccountsExist( administrators.length + managers.length + users.length + fakeUserCount );

  if ( !usersExist ) {
    _createUsers( administrators );
    _createUsers( managers );
    _createUsers( users );
    _createUsers( _generateFakeUsers( fakeUserCount ) );
  }
};

let _checkIfAccountsExist = ( count ) => {
  let userCount = Meteor.users.find().count();
  return userCount < count ? false : true;
};

let _createUsers = ( users ) => {
  for ( let i = 0; i < users.length; i++ ) {
    let user       = users[ i ],
        userExists = _checkIfUserExists( user.email );

    if ( !userExists ) {
      let userId  = _createUser( user ),
          isAdmin = _checkIfAdmin( user.email ),
          isManager = _checkIfManager( user.email );

      if ( isAdmin ) {
        Roles.setUserRoles( userId, 'admin' );
      } else if ( isManager ) {
        Roles.setUserRoles( userId, 'manager' );
      } else {
        Roles.setUserRoles( userId, 'employee' );
      }
    }
  }
};

let _checkIfUserExists = ( email ) => {
  return Meteor.users.findOne( { 'emails.address': email } );
};

let _createUser = ( user ) => {
  let userId = Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      name: user.name
    }
  });

  return userId;
};

let _checkIfAdmin = ( email ) => {
  return _.find( administrators, ( admin ) => {
    return admin.email === email;
  });
};  

let _checkIfManager = ( email ) => {
  return _.find( managers, ( manager ) => {
    return manager.email === email;
  });
};

let _generateFakeUsers = ( count ) => {
  let users = [];

  for ( let i = 0; i < count; i++ ) {
    users.push({
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: faker.internet.email(),
      password: 'password'
    });
  }

  return users;
};

Modules.server.generateAccounts = generateAccounts;
