module.exports = {


  friendlyName: 'Detail',


  description: 'Detail game.',


  inputs: {
    id: {
      type: 'number',
      // required: true
    }
  },


  exits: {
    myResponse: {
      description: 'detail game',
      responseType: 'myResponse'
    }
  },


  fn: async function (inputs, exits) {
    try {
      var game = await Game.findOne(inputs);
      if(game){
        return exits.myResponse({
          body: game,
          code: 200,
          message: 'game detail exist',
          shortCode: 'SUCCESS'
        });
      }else{
        return exits.myResponse({
          body: {},
          code: 404,
          message: 'game detail not found',
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
