/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // 'POST /api/v1/checkToken': 'user/check-token',
  'POST /api/v1/signUp': 'user/signup',
  'POST /api/v1/signOut': 'user/signout',

  'GET /api/v1/check': 'AuthController.checkToken',

  'POST /api/v1/game/create': 'game/create',
  'POST /api/v1/game/update': 'game/update',
  'GET /api/v1/game/list': 'game/list',
  'GET /api/v1/game/getById': 'game/detail',
  'GET /api/v1/game/delete': 'game/delete',

};
