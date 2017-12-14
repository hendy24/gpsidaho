/*
    The AppController file contains functions used by all controllers
    --------------
    These functions perform the standard CRUD operations on the model that
    cooresponds with whichever controller is calling the function.
    --------------
*/

// Add a new item
exports.add = function (model, data) {
    return new Promise(function (resolve, reject) {
        model.create(data, function (err, item) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(item);
            }
        });

    });
}

// Update and existing item
exports.update = function (model, data) {
    return new Promise(function (resolve, reject) {
        model.findByIdAndUpdate(data._id, data, function (err, item) {
            if (err) {
                reject(err);
            } else {
                resolve(item);
            }
        });
    })
}

// find all the documents
exports.fetchAll = function (model) {
    return new Promise(function (resolve, reject) {
        model.find({}, function (err, item) {
            if (err) {
                reject(err);
            } else {
                resolve(item);
            }
        });
    });
}

// find one document by id
exports.fetchOne = function (model, id) {
    return new Promise(function (resolve, reject) {
        model.findById(id, function (err, item) {
            if (err) {
                reject(err);
            } else {
                resolve(item);
            }
        });
    });
}

// delete item by id
exports.delete = function (model, id) {
    return new Promise(function (resolve, reject) {
        model.findByIdAndRemove(id, function (err, item) {
            if (err) {
                reject(err);
            } else {
                resolve(item);
            }
        });
    });
}



