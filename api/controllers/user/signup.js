module.exports = {

  friendlyName: 'Signup',

  description: 'Signup user.',

  inputs: {
    accessToken: {
      type: 'string',
      description: 'token',
      required: true
    }
  },

  exits: {
    success: {
      description: 'register success',
      responseType: 'success'
    },
    myResponse: {
      description: 'register success with my custom response',
      responseType: 'myResponse'
    },
    notFound: {
      description: 'User not found with the email address provided or password do not match email provided',
      statusCode: 404
    }
  },

  fn: async function (inputs, exits ) {
    try {
      User.findOrCreate({accessToken: inputs.accessToken}, inputs)
      .exec(async (err, user, wasCreated) => {
        if(err){
          return exits.myResponse({
            body: err,
            code: 400,
            message: 'Something went wrong',
            shortCode: 'FAILED'
          });
        }

        if(wasCreated) {
          return exits.myResponse({
            body: wasCreated,
            code: 200,
            message: 'User created',
            shortCode: 'SUCCESS'
          });
        }else {
          return exits.myResponse({
            body: user,
            code: 200,
            message: 'User already created',
            shortCode: 'SUCCESS'
          });
        }
      });
    } catch (error) {
      return exits.myResponse({
        body: error,
        code: 400,
        message: 'Something went wrong',
        shortCode: 'FAILED'
      });
    }
  }
};
