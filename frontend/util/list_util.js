export const requestListIndex = () => {
  return $.ajax({
    url: 'api/lists',
    method: 'GET',
  });
};

export const requestList = (id) => {
  return $.ajax({
    url: `api/lists/${id}`,
    method: 'GET',
  });
};

export const createList = (list) => {
  return $.ajax({
    url: 'api/lists',
    method: 'POST',
    data: { list }
  });
};

export const updateList = (list) => {
  return $.ajax({
    url: `api/lists/${list.id}`,
    method: 'PATCH',
    data: { list }
  });
};

export const deleteList = (id) => {
  return $.ajax({
    url: `api/lists/${id}`,
    method: 'DELETE',
  });
};
