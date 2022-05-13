import { renderTasks } from './renderer';
import { initTodoListHandlers } from './todoList';
import { getTasksList } from './tasksGateway';
import { setItem } from './storage';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
