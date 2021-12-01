module.exports = {


  friendlyName: 'Update',


  description: 'Update game.',


  inputs: {
    name: {
      type: 'string',
      // required: true
    },
    genre: {
      type: 'string'
    },
    id: {
      type: 'number',
      // required: true
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
      var game = await Game.updateOne({ id: inputs.id }).set({
        name: inputs.name,
        genre: inputs.genre
      });
      if(game){
        return exits.myResponse({
          body: game,
          code: 200,
          message: 'game updated',
          shortCode: 'SUCCESS'
        });
      }else{
        return exits.myResponse({
          body: {},
          code: 404,
          message: 'game not found',
          shortCode: 'FAILED'
        });
      }
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
