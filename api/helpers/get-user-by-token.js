module.exports = {


  friendlyName: 'Get user by token',


  description: '',


  inputs: {
    accessToken: {
      type: 'string',
      description: 'access token'
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'User by token',
    },
    notFound: {
      description: 'user notfound',
      responseType: 'notFound'
    },

  },

  fn: async function (inputs, exits) {
    var user = await User.findOne({accessToken: inputs.accessToken});
    if (!user) { throw 'notFound'; }
    return exits.success({
      data: user
    });
  }

};

