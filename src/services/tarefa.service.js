const ListaDeTarefas = [
  {
    id: 1,
    tema: 'Javascript',
    tempo: '01:01:01',
  },
  {
    id: 2,
    tema: 'C#',
    tempo: '01:30:00',
  },
  {
    id: 3,
    tema: 'Python',
    tempo: '02:00:00',
  },
];

const findTarefaService = () => {
  return ListaDeTarefas;
};

const findTarefaByIdService = (id) => {
  return ListaDeTarefas.find((tarefa) => tarefa.id == id);
};

const createTarefaService = (newTarefa) => {
  const newId = ListaDeTarefas.length + 1;
  newTarefa.id = newId;
  ListaDeTarefas.push(newTarefa);
  return newTarefa;
};

const updateTarefaService = (id, tarefaEdit) => {
  tarefaEdit['id'] = id;
  const tarefaIndex = ListaDeTarefas.findIndex((tarefa) => tarefa.id == id);
  ListaDeTarefas[tarefaIndex] = tarefaEdit;
  return tarefaEdit;
};

const deleteTarefaService = (id) => {
    const tarefaIndex = ListaDeTarefas.findIndex((tarefa) => tarefa.id == id);
    return ListaDeTarefas.splice(tarefaIndex, 1);
};

module.exports = {
  findTarefaService,
  findTarefaByIdService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};
