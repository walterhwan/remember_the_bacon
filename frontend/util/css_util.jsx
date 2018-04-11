
export const toggleTaskDetailSection = () => {
  const taskItems = document.getElementsByClassName('task-item');
  const taskSection = document.getElementById('task-details-section');
  taskSection.classList.add('hidden-task-details');
  for (const el of taskItems) {
    el.classList.remove('selected-task');
  }

  const doneIcons = document.getElementsByClassName(`done-icon`);
  for (const el of doneIcons) {
    el.classList.add('hidden');
  }
};
