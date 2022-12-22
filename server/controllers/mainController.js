const partsModel = require('../models/partModel.js');

const mainController = {};

// Cases
mainController.getCases = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Cases.find({}).then((result) => {
    // console.log(result);
    res.locals.cases = result;
    return next();
  });
};
mainController.createCases = (req, res, next) => {
  const { caseName } = req.body;
  partsModel.Cases.create({ caseName }).then((result) => {
    // console.log(result);
  });
  return next();
};
mainController.deleteCases = (req, res, next) => {
  // console.log(req.body);
  const { id } = req.body;
  partsModel.Cases.findByIdAndDelete(id).then((deleted) => {
    console.log(deleted);
  });
  return next();
};

// Backplate
mainController.getBackplates = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Backplate.find({}).then((result) => {
    // console.log(result);
    res.locals.backplate = result;
    return next();
  });
};
mainController.createBackplates = (req, res, next) => {
  const { backplateName } = req.body;
  partsModel.Backplate.create({ backplateName }).then((result) => {
    console.log(result);
  });
  return next();
};
mainController.deleteBackplates = (req, res, next) => {
  // console.log(req.body);
  const { id } = req.body;
  partsModel.Backplate.findByIdAndDelete(id).then((deleted) => {
    console.log(deleted);
  });
  return next();
};

// Switches
mainController.getKeyswitches = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Keyswitches.find({}).then((result) => {
    // console.log(result);
    res.locals.keyswitches = result;
    return next();
  });
};
mainController.createKeyswitches = (req, res, next) => {
  const { keyswitchesName } = req.body;
  partsModel.Keyswitches.create({ keyswitchesName }).then((result) => {
    // console.log(result);
  });
  return next();
};
mainController.deleteKeyswitches = (req, res, next) => {
  // console.log(req.body);
  const { id } = req.body;
  partsModel.Keyswitches.findByIdAndDelete(id).then((deleted) => {
    console.log(deleted);
  });
  return next();
};

// Keycaps
mainController.getKeycaps = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Keycaps.find({}).then((result) => {
    // console.log(result);
    res.locals.keycaps = result;
    return next();
  });
};
mainController.createKeycaps = (req, res, next) => {
  const { keycapsName } = req.body;
  partsModel.Keycaps.create({ keycapsName }).then((result) => {
    // console.log(result);
  });
  return next();
};
mainController.deleteKeycaps = (req, res, next) => {
  // console.log(req.body);
  const { id } = req.body;
  partsModel.Keycaps.findByIdAndDelete(id).then((deleted) => {
    console.log(deleted);
  });
  return next();
};

// Cords
mainController.getCords = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Cords.find({}).then((result) => {
    // console.log(result);
    res.locals.cords = result;
    return next();
  });
};
mainController.createCords = (req, res, next) => {
  const { cordsName } = req.body;
  partsModel.Cords.create({ cordsName }).then((result) => {
    // console.log(result);
  });
  return next();
};
mainController.deleteCords = (req, res, next) => {
  // console.log(req.body);
  const { id } = req.body;
  partsModel.Cords.findByIdAndDelete(id).then((deleted) => {
    console.log(deleted);
  });
  return next();
};

// Switch Opener
mainController.getSwitchopener = (req, res, next) => {
  //   console.log('im in controller');
  partsModel.Switchopener.find({}).then((result) => {
    // console.log(result);
    res.locals.switchopener = result;
    return next();
  });
};
mainController.createSwitchopener = (req, res, next) => {
  const { switchopenerName } = req.body;
  partsModel.Switchopener.create({ switchopenerName }).then((result) => {
    // console.log(result);
  });
  return next();
};
mainController.deleteSwitchopener = (req, res, next) => {
  // console.log(req.body);
  const { id } = req.body;
  partsModel.Switchopener.findByIdAndDelete(id).then((deleted) => {
    console.log(deleted);
  });
  return next();
};

module.exports = mainController;
