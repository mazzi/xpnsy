// default configuration file (development is default)
var config = module.exports = {};

config.env = 'production';
config.host = 'http://xpnsy.azurewebsites.net';
config.port = process.env.PORT || 3000;
config.cookieSecret = 'aldksdkljdskljsdklsdj-092fewjwefkmf';

//mongo database
config.mongo = {
	uri: 'mongodb://MongoLab-tr:09c2eS4oi1knkTMYrAEIWHvqsC7FssqgL7W5fcaeUVA-@ds041157.mongolab.com:41157/MongoLab-tr'
};

// facebook integration
config.facebook = {
	clientID: 493919190675289,
	clientSecret: 'a3db1fbac3d4907b207ba3dd980e74e1',
	callbackURL: 'http://' + config.host + ':' + config.port + '/auth/facebook/callback'
}