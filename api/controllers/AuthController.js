/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  checkToken : async function(req, res){
    try {
      var data = req.allParams();
      var user = await sails.helpers.getUserByToken(data.accessToken);
      var isVerify = await sails.helpers.verifyToken(user.data.accessToken);
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
