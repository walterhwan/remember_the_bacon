
export const toggleTaskDetailSection = () => {
  const taskItems = document.getElementsByClassName('task-item');
  const taskSection = document.getElementById('task-details-section');
  taskSection.classList.add('hidden-task-details');
  for (const el of taskItems) {
    el.classList.remove('selected-task');
  }
};
