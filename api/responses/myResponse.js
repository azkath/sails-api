/**
 * myResponse.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.myResponse();
 *     // -or-
 *     return res.myResponse(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'myResponse'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function myResponse(data) {

  // Get access to `req` and `res`
  // var req = this.req;
  var res = this.res;

  var objRes = {
    'body': data.body,
    'status': {
      'code': data.code,
      'message': data.message,
      'shortCode': data.shortCode
    }
  };

  return res.status(200).json(objRes);

};
