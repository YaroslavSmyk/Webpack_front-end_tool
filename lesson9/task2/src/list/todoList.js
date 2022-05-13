import { onCreateTask } from './createTask';
import { onListClick } from './deleteTask';
import { onToggleTask } from './updateTask';

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.btn');
  buttonElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
  listElem.addEventListener('click', onToggleTask);
};
