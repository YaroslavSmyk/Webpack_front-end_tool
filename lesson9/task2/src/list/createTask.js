import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';
import { createTask, getTasksList } from './tasksGateway';

export const onCreateTask = () => {
  const inputTaskElem = document.querySelector('.task-input');

  const text = inputTaskElem.value;

  if (!text) {
    return;
  }

  inputTaskElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
