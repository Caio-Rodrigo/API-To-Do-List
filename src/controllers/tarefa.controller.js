const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = (req, res) => {
  const Tarefas = tarefasService.findTarefaService();
  if (Tarefas.length == 0) {
    res.status(404).json({ message: 'Não existem tarefas cadastrada' });
  }
  res.send(Tarefas);
};
const findByIdTarefaController = (req, res) => {
  const parametroId = +req.params.id;

  if(!parametroId){
    return res.status(400).send({message:'ID invalido'});
  }

  const escolhaTarefa = tarefasService.findTarefaByIdService(parametroId);
  if(!escolhaTarefa){
    return res.status(404).send({message:'Tarefa invalida'});
  }
  res.send(escolhaTarefa);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;

if(!tarefa || !tarefa.tema || !tarefa.tempo){
  
  if(!tarefa.tema && !tarefa.tempo){
    return res.status(400).send({message:"Por favor preencha todos os campos"})
  }

  if(!tarefa.tema){
    return res.status(400).send ({message:"Porfavor insira uma tema"})
  }

  if(!tarefa.tempo){
    return res.status(400).send ({message:"Porfavor insira o tempo"} )
  }

}

  const newtarefa = tarefasService.createTarefaService(tarefa);
  res.send(newtarefa);
};

const updateTarefaController = (req, res) => {
  const idTarefa = +req.params.id;
  if(!idTarefa){
    return res.status(400).send({message:'ID invalido'});
  }
  const tarefaEdit = req.body;
  if(!tarefaEdit || !tarefaEdit.tema || !tarefaEdit.tempo){
  
    if(!tarefaEdit.tema && !tarefaEdit.tempo){
      return res.status(400).send({message:"Por favor preencha todos os campos"})
    }
  
    if(!tarefaEdit.tema){
      return res.status(400).send ({message:"Porfavor insira uma tema"})
    }
  
    if(!tarefaEdit.tempo){
      return res.status(400).send ({message:"Porfavor insira o tempo"} )
    }
  }
  
  const updateTare = tarefasService.updateTarefaService(idTarefa, tarefaEdit);
  res.send(updateTare);
};

const deleteTarefaController = (req, res) => {
  const idTarefa = +req.params.id;
  if(!idTarefa){
    return res.status(400).send({message:'ID invalido'});
  }
  tarefasService.deleteTarefaService(idTarefa);
  res.send({ message: 'Tarefa Deletada com sucesso!!' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
