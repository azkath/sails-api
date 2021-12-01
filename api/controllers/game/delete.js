module.exports = {


  friendlyName: 'Delete',


  description: 'Delete game.',


  inputs: {
    id: {
      type: 'number',
      // required: true
    }
  },


  exits: {
    myResponse: {
      description: 'delete game',
      responseType: 'myResponse'
    }
  },


  fn: async function (inputs, exits) {

    try {
      var game = await Game.destroyOne(inputs);
      if(game){
        return exits.myResponse({
          body: {},
          code: 200,
          message: 'game deleted success',
          shortCode: 'SUCCESS'
        });
      }else{
        return exits.myResponse({
          body: {},
          code: 404,
          message: 'game notfound',
          shortCode: 'SUCCESS'
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
