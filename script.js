const btnAddTask = document.getElementById('criar-tarefa');
const inputNewTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemove = document.getElementById('remover-finalizados');

function lineThrough(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function selectTask() {
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('dblclick', lineThrough);
    element.addEventListener('click', (elementTarget) => {
      const selectedTask = elementTarget.target;
      const liElement = document.querySelectorAll('li');
      for (let i = 0; i < liElement.length; i += 1) {
        if (liElement[i].className.includes('selected')) {
          liElement[i].classList.toggle('selected');
        }
      }
      selectedTask.classList.toggle('selected');
    });
  });
}

btnAddTask.addEventListener('click', () => {
  const newTask = document.createElement('li');
  newTask.innerText = inputNewTask.value;
  taskList.appendChild(newTask);
  inputNewTask.value = '';
  selectTask();
});

function clearList() {
  const listTasks = document.querySelectorAll('li');
  const listLength = Object.keys(listTasks).length;
  for (let i = 0; i < listLength; i += 1) {
    taskList.removeChild(listTasks[i]);
  }
}

btnClearList.addEventListener('click', clearList);

function removeDone() {
  const listDone = document.querySelectorAll('.completed');
  console.log(listDone);
  const doneLength = Object.keys(listDone).length;
  for (let i = 0; i < doneLength; i += 1) {
    taskList.removeChild(listDone[i]);
  }
}

btnRemove.addEventListener('click', removeDone);
