var appModel = require('../models/app.model');
var companyNews = require('../models/company-news.model');

exports.fetchCompanyNews = function (req, res, next) {
    appModel.fetchAll(companyNews).then(function (result) {
        res.send(result);
    });

}

exports.fetchCompanyNewsPost = function (req, res, next) {
    var id = req.params.id;
    appModel.fetchOne(companyNews, id).then(function (result) {
        res.send(result);
    });

}

exports.deleteCompanyNews = function (req, res, next) {
    var id = req.params.id;
    appModel.delete(companyNews, id).then(function (result) {
        res.send(result);
    });

}

exports.addCompanyNews = function (req, res, next) {
    var data = {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        author: req.body.author
    }

    appModel.add(companyNews, data)
        .then(function (result) {
            console.log('The new company news article has been saved');
            res.send(result);
        });

}

exports.updateCompanyNews = function (req, res, next) {
    var data = {
        _id: req.params.id,
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        author: req.body.author,
        dateModified: Date.now()
    }

    appModel.update(companyNews, data)
        .then(function (result) {
            console.log('The news article with id { result._id } has been saved.');
            res.send(result);
        });

}