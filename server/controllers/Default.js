'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.labelsAdd = function labelsAdd (req, res, next) {
  var title = req.swagger.params['title'].value;
  var color = req.swagger.params['color'].value;
  var description = req.swagger.params['description'].value;
  Default.labelsAdd(title,color,description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.labelsGet = function labelsGet (req, res, next) {
  Default.labelsGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.labelsRemove = function labelsRemove (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.labelsRemove(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
