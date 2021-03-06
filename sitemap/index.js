var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
  , ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut
	, home = require('../routes/home')
	, about = require('../routes/about')
	, auth = require('../routes/auth')
  , dashboard = require('../routes/dashboard')
  , movement = require('../routes/movement')
  , label = require('../routes/label');


exports.addRoutes = function(app, passport) {
	app.get('/', ensureLoggedOut('/dashboard'), home.show);
	app.get('/about', about.show);

	app.get('/auth/facebook', passport.authenticate('facebook'));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/dashboard', failureRedirect: '/' }));
	app.get('/logout', auth.logout);

	app.get('/dashboard', ensureLoggedIn('/'), dashboard.show);

	app.post('/labels', ensureLoggedIn('/'), label.create);
	app.get('/labels', ensureLoggedIn('/'), label.list);

	app.post('/movements', ensureLoggedIn('/'), movement.create);
	app.get('/movements', ensureLoggedIn('/'), movement.list);
	app.get('/movements/totals/expense/:period', ensureLoggedIn('/'), movement.totalExpensesPerLabel);
	app.get('/movements/totals/income/:period', ensureLoggedIn('/'), movement.totalIncomesPerLabel);
};