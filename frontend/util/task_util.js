export const requestTaskIndex = () => {
  return $.ajax({
    url: 'api/tasks',
    method: 'GET',
  });
};

export const requestListTask = (listId) => {
  return $.ajax({
    url: `api/lists/${listId}/tasks`,
    method: 'GET',
  });
};

export const requestTask = (id) => {
  return $.ajax({
    url: `api/tasks/${id}`,
    method: 'GET',
  });
};

export const createTask = (task) => {
  return $.ajax({
    url: `api/lists/${task.list_id}/tasks`,
    method: 'POST',
    data: { task }
  });
};

export const updateTask = (task) => {
  return $.ajax({
    url: `api/tasks/${task.id}`,
    method: 'PATCH',
    data: { task }
  });
};

export const deleteTask = (id) => {
  return $.ajax({
    url: `api/tasks/${id}`,
    method: 'DELETE',
  });
};
