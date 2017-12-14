var appModel = require('../models/app.model');
var User = require('../models/user.model.js');

exports.createUser = function (req, res, next) {
    if (req.body.username &&
        req.body.password &&
        req.body.passwordConf &&
        req.body.firstName &&
        req.body.lastName
    ) {
        var userData = {
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    }

    User.create(userData, function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.send(user);
        }
    });
}

exports.updateUser = function (req, res, next) {
    var data = {
        _id: req.params.id,
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf,
        firstName: req.body.firstName,
        lastName: req.body.lastName

    }

    appModel.update(User, data).then(function (result) {
        res.send(result);
    });
}

exports.deleteUser = function (req, res, next) {
    var id = req.params.id;
    User.findByIdAndRemove(id, function (err, user) {
        if (err) {
            console.log('Could not remove the user');
        } else {
            console.log('The user has been deleted');
            res.json(user);
        }
    });
}

exports.fetchUsers = function (req, res, next) {
    appModel.fetchAll(User).then(function (result){
        res.send(result);
    });
}

exports.fetchUserById = function (req, res, next) {
    var id = req.params.id;
    appModel.fetchOne(User, id).then(function (result) {
        res.send(result);
    });
}