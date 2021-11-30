module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


  inputs: {
    accessToken: {
      type: 'string',
      description: 'token',
      required: true
    },
  },


  exits: {
    success: {
      description: 'logout success',
      responseType: 'success'
    },
    notFound: {
      description: 'User not found with the email address provided or password do not match email provided',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {
    try {
      await User.destroyOne({accessToken: inputs.accessToken});
      var resSuccess = await sails.helpers.formatResponse('Logout Success','SUCCESS', {}, 200);
      return exits.success(resSuccess);
    } catch (error) {
      console.log(444, error);
    }
  }


};
