import { renderTasks } from './renderer';
import { setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';

export const onListClick = (event) => {
  const deleteBtn = event.target.classList.contains('list-item__delete-btn');

  if (deleteBtn) {
    const taskId = event.target.dataset.id;

    deleteTask(`${taskId}`)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};
