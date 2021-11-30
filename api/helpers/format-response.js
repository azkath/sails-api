module.exports = {


  friendlyName: 'Format response',


  description: '',


  inputs: {
    message: {
      type: 'string'
    },
    shortCode: {
      type: 'string'
    },
    body: {
      type: 'json',
      defaultsTo: null
    },
    code: {
      type: 'number'
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    return exits.success(inputs);
  }


};

