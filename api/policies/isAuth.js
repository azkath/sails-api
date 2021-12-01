module.exports = async function (req, res, proceed) {

  // If `req.me` is set, then we know that this request originated
  // from a logged-in user.  So we can safely proceed to the next policy--
  // or, if this is the last policy, the relevant action.
  // > For more about where `req.me` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).
  var accessToken = req.headers.accesstoken;
  var isVerify = await sails.helpers.verifyToken(accessToken);
  console.log(111, isVerify);
  if(isVerify.data.status === 'success'){
    return proceed();
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.
  return res.myResponse({
    body: isVerify.data.message || isVerify.data.message.message,
    code: 400,
    message: 'Something went wrong',
    shortCode: 'FAILED'
  });
};
