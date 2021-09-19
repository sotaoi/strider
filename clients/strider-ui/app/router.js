import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('forgot-password');
  this.route('register');
  this.route('reset', { path: 'reset/:token' });

  this.route('organization', { path: ':org' }, function () {
    this.route('repository', { path: ':repo' }, function () {
      this.route('job', { path: '/job/:jobId' });
    });
  });
});
