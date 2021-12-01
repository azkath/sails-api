module.exports = {

  friendlyName: 'Create',

  description: 'Create game.',

  inputs: {
    name: {
      type: 'string',
      // required: true
    },
    genre: {
      type: 'string'
    }
  },

  exits: {
    myResponse: {
      description: 'create game',
      responseType: 'myResponse'
    }
  },

  fn: async function (inputs, exits) {
    try {
      var game = await Game.create(inputs).fetch();
      return exits.myResponse({
        body: game,
        code: 200,
        message: 'game created',
        shortCode: 'SUCCESS'
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
