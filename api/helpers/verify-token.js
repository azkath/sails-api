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
      JWK_URI: `https://${process.env.AZURE_B2C_TENANT_NAME}.b2clogin.com/${process.env.AZURE_B2C_TENANT_DOMAIN}/${process.env.AZURE_B2C_POLICY}/discovery/v2.0/keys`,
      ISS: `https://${process.env.AZURE_B2C_TENANT_NAME}.b2clogin.com/${process.env.AZURE_B2C_TENANT_ID}/v2.0/`,
      AUD: `${process.env.AZURE_B2C_CLIENT_ID}`
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

