var appModel = require('../models/app.model');
var teamMember = require('../models/team-member.model');

exports.fetchTeamMembers = function (req, res, next) {
    appModel.fetchAll(teamMember).then(function (result) {
        res.send(result);
    });
}

exports.fetchTeamMember = function (req, res, next) {
    var id = req.params.id;
    appModel.fetchOne(teamMember, id).then(function (result) {
        res.send(result);
    });
}

exports.deleteTeamMember = function (req, res, next) {
    var id = req.params.id;
    appModel.delete(teamMember, id).then(function (result) {
        res.send(result);
    });

}

exports.addTeamMember = function (req, res, next) {
    var data = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        title: req.body.title,
        name: req.body.name,
        bio: req.body.bio,
        image: req.body.image
    }

    appModel.add(teamMember, data)
        .then(function (result) {
            console.log('Update Successful');
            res.send(result);
        });

}

exports.updateTeamMember = function (req, res, next) {
    var data = {
        _id: req.params.id,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        title: req.body.title,
        name: req.body.name,
        bio: req.body.bio,
        image: req.body.image
    }

    appModel.update(teamMember, data)
        .then(function (result) {
            res.send(result);
        });

}

