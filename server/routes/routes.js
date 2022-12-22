const express = require('express');
const res = require('express/lib/response');
const app = require('../server.js');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/case', mainController.getCases, (req, res) => {
  return res.status(200).json(res.locals.cases);
});

router.post('/case', mainController.createCases, (req, res) => {
  return res.status(200).json('Got it');
});

router.get('/backplate', mainController.getBackplates, (req, res) => {
  return res.status(200).json(res.locals.backplate);
});

router.post('/backplate', mainController.createBackplates, (req, res) => {
  return res.status(200).json('Got it');
});

router.get('/keyswitches', mainController.getKeyswitches, (req, res) => {
  return res.status(200).json(res.locals.keyswitches);
});

router.post('/keyswitches', mainController.createKeyswitches, (req, res) => {
  return res.status(200).json('Got it');
});

router.get('/keycaps', mainController.getKeycaps, (req, res) => {
  return res.status(200).json(res.locals.keycaps);
});

router.post('/keycaps', mainController.createKeycaps, (req, res) => {
  return res.status(200).json('Got it');
});

router.get('/cords', mainController.getCords, (req, res) => {
  return res.status(200).json(res.locals.cords);
});

router.post('/cords', mainController.createCords, (req, res) => {
  return res.status(200).json('Got it');
});

router.get('/switchopener', mainController.getSwitchopener, (req, res) => {
  return res.status(200).json(res.locals.switchopener);
});

router.post('/switchopener', mainController.createSwitchopener, (req, res) => {
  return res.status(200).json('Got it');
});

module.exports = router;
