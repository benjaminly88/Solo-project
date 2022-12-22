const express = require('express');
const res = require('express/lib/response');
const app = require('../server.js');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/case', mainController.getCases, (req, res) => {
  return res.status(200).json(res.locals.cases);
});

router.get('/backplate', mainController.getBackplates, (req, res) => {
  return res.status(200).json(res.locals.backplate);
});

router.get('/keyswitches', mainController.getKeyswitches, (req, res) => {
  return res.status(200).json(res.locals.keyswitches);
});

router.get('/keycaps', mainController.getKeycaps, (req, res) => {
  return res.status(200).json(res.locals.keycaps);
});

router.get('/cords', mainController.getCords, (req, res) => {
  return res.status(200).json(res.locals.cords);
});

router.get('/switchopener', mainController.getSwitchopener, (req, res) => {
  return res.status(200).json(res.locals.switchopener);
});

module.exports = router;
