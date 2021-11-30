/**
 * success.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.success();
 *     // -or-
 *     return res.success(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'success'
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

module.exports = function success(data) {

  // Get access to `req` and `res`
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 200;
  var _response = {
    'data': data.body,
    'status': {
      'code': data.code,
      'message': data.message,
      'shortCode': data.shortCode
    }
  };
  console.log(555, _response);

  return res.status(statusCodeToSet).json(_response);

};
