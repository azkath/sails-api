var Pagination = require('sails-pagination');

module.exports = {


  friendlyName: 'List',


  description: 'List game.',


  inputs: {
    skip: {
      type: 'number',
      description: 'Indicate the number of tweets to skip before returning the results.',
      defaultsTo: 0
      // required: true,
    },
    limit: {
      type: 'number',
      description: 'Set the maximum number of tweets to retrieve',
      defaultsTo: 10
      // required: true
    },
    sort: {
      type: 'string',
      defaultsTo: 'createdAt DESC'
    }
  },


  exits: {
    myResponse: {
      description: 'list game',
      responseType: 'myResponse'
    }
  },


  fn: async function (inputs, exits) {
    try {
      var buildParams = Pagination.build(inputs);
      Game.find(buildParams)
      .then((models) => {
        return [
          models,
          // Game.count(buildParams)
        ];
      })
      .spread((models, count) => {
        return Pagination.paginate(count, buildParams, models);
      })
      .then((models) => {
        return exits.myResponse({
          body: models,
          code: 200,
          message: 'game list',
          shortCode: 'SUCCESS'
        });
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
