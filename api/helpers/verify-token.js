var azureJWT = require('azure-jwt-verify');


const generateResponse = (response) => {
  if(typeof response === 'string'){
    return JSON.parse(response);
  }else{
    return response;
  }
};

module.exports = {

  friendlyName: 'Verify token',

  description: '',

  inputs: {
    // req: {
    //   type: 'ref',
    //   description: 'The current incoming request (req).',
    //   // required: true
    // }
    accessToken: {
      type: 'string'
    }
  },

  exits: {

    success: {
      description: 'Success',
    },

  },
  fn: function (inputs, exits) {
    var config = {
      JWK_URI: 'https://astrapointb2cpoc.b2clogin.com/astrapointb2cpoc.onmicrosoft.com/b2c_1_signin/discovery/v2.0/keys',
      ISS: 'https://astrapointb2cpoc.b2clogin.com/7fb40275-09e4-47e7-afbb-279161ae4030/v2.0/',
      AUD: 'c87e12f7-67e8-46bd-a9ea-74edc22c34a3'
    };

    azureJWT.verify(inputs.accessToken, config).then(response => {
      return exits.success({
        data: generateResponse(response)
      });
    }).catch(err => {
      return exits.success({
        data: generateResponse(err)
      });
    });
  }

};

