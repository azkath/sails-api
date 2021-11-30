/**
 * expired.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.expired();
 *     // -or-
 *     return res.expired(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'expired'
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

module.exports = function expired(data) {
  // Get access to `req` and `res`
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 200;
  var response = {
    'body': data.body,
    'status': {
      'code': data.code,
      'message': data.message,
      'shortCode': data.shortCode
    }
  };


  return res.status(statusCodeToSet).json(response);

};
