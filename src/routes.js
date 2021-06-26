const express = require('express');

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

routes.get('/', (req, res) => {
  res.render('index', { page: 'enter-room' });
});

routes.get('/create-pass', (req, res) => {
  res.render('index', { page: 'create-pass' });
});

routes.post('/create-room', RoomController.create);
routes.get('/room/:room', RoomController.open);
routes.post('/enterroom', RoomController.enter);

routes.post('/question/create/:room', QuestionController.create);
routes.post('/question/:room/:question/:action', QuestionController.index);

module.exports = routes;
