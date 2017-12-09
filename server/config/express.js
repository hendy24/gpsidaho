var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser');



module.exports = function(app, config) {
    app.set('views', config.rootPath + '/dist');
    // app.use(express.logger('dev'));
    // app.use(express.cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended: false }));
    // app.use(express.session({secret: 'Lucy is a great dog'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/dist/index.html'));
};
