/**
 * notFound.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.notFound();
 *     // -or-
 *     return res.notFound(data);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'notFound'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: data }
 * ```
 */

module.exports = function notFound(data) {
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
