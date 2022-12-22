const partsModel = require('../models/partModel.js');

const mainController = {};

mainController.getCases = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Cases.find({}).then((result) => {
    console.log(result);
    res.locals.cases = result;
    return next();
  });
};

mainController.getBackplates = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Backplate.find({}).then((result) => {
    console.log(result);
    res.locals.backplate = result;
    return next();
  });
};

mainController.getKeyswitches = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Keyswitches.find({}).then((result) => {
    console.log(result);
    res.locals.keyswitches = result;
    return next();
  });
};

mainController.getKeycaps = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Keycaps.find({}).then((result) => {
    console.log(result);
    res.locals.keycaps = result;
    return next();
  });
};

mainController.getCords = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Cords.find({}).then((result) => {
    console.log(result);
    res.locals.cords = result;
    return next();
  });
};

mainController.getSwitchopener = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Switchopener.find({}).then((result) => {
    console.log(result);
    res.locals.switchopener = result;
    return next();
  });
};

module.exports = mainController;
