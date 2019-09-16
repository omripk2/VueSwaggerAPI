'use strict';

let labels = [
  { id: 12, title: "foo", description: '', color: "#FF00" }
];

let labelId = 1;
/**
 *
 * no response value expected for this operation
 **/
exports.labelsGet = function () {
  return new Promise(function (resolve, reject) {
    resolve(JSON.stringify(labels));
  });
}

/**
 *
 * title String 
 * color String 
 * description String  (optional)
 * no response value expected for this operation
 **/
exports.labelsAdd = function (title, color, description) {
  const label = {
    id: labelId++,
    title: title,
    description: description || "",
    color: color
  };

  console.log(label);
  labels.push(label);
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

/**
 *
 * id String 
 * no response value expected for this operation
 **/
exports.labelsRemove = function (id) {

  labels = labels.filter((label) => {
    return label.id != parseInt(id, 10);
  })

  return new Promise(function (resolve, reject) {
    resolve(JSON.stringify({ result: true }));
  });
}