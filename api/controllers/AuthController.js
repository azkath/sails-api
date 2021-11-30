/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  checkToken : async function(req, res){
    // var resNotFound = await sails.helpers.formatResponse('User Not Found', 'FAILED', {}, 404);
    try {
      var data = req.allParams();
      var user = await sails.helpers.getUserByToken(data.accessToken);
      var isVerify = await sails.helpers.verifyToken(user.data.accessToken);
      // var resSuccess = await sails.helpers.formatResponse(isVerify.data.message.message,'SUCCESS', user.data, 200);
      // var resExpired = await sails.helpers.formatResponse(isVerify.data.message.message, 'FAILED', user.data, 400);
      console.log(333, isVerify);
      if(isVerify.data.status === 'success'){
        return res.myResponse({
          body: user.data,
          code: 200,
          message: isVerify.data.message,
          shortCode: 'SUCCESS'
        });
      }else{
        return res.myResponse({
          body: user.data,
          code: 400,
          message: isVerify.data.message.message,
          shortCode: 'EXPIRED'
        });
      }
    } catch (error) {
      console.log(error);
      return res.myResponse({
        body: error,
        code: 400,
        message: 'Something went wrong',
        shortCode: 'FAILED'
      });
    }
  }

};
