const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = (req, res) => {
  const allTarefas = tarefasService.findTarefaService();
  res.send(allTarefas);
};
const findByIdTarefaController = (req, res) => {
  const parametroId = +req.params.id;
  const escolhaTarefa = tarefasService.findTarefaByIdService(parametroId);
  res.send(escolhaTarefa);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;
  const newtarefa = tarefasService.createTarefaService(tarefa);
  res.send(newtarefa);
};

const updateTarefaController = (req, res) => {
  const idParam = +req.params.id;
  const tarefaEdit = req.body;
  const updateTare = tarefasService.updateTarefaService(idParam, tarefaEdit);
  res.send(updateTare);
};

const deleteTarefaController = (req, res) => {
  const idParam = +req.params.id;
  tarefasService.deleteTarefaService(idParam);
  res.send({ message: 'Tarefa Deletada com sucesso!!' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
