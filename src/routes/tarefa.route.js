const route = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');

route.get('/todas-tarefas', controllerTarefas.findAllTarefasController);
route.get('/tarefa/:id', controllerTarefas.findByIdTarefaController);
route.post('/create', controllerTarefas.createTarefaController);
route.put('/update/:id', controllerTarefas.updateTarefaController);
route.delete('/delete/:id', controllerTarefas.deleteTarefaController);

module.exports = route;
