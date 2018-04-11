import * as TaskAPIUtil from '../util/task_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const RECEIVE_TASK_FOR_LIST = 'RECEIVE_TASK_FOR_LIST';
export const REMOVE_TASK_FOR_LIST = 'REMOVE_TASK_FOR_LIST';

export const RECEIVE_SELECTED_TASK = 'RECEIVE_SELECTED_TASK';
export const REMOVE_SELECTED_TASK = 'REMOVE_SELECTED_TASK';
export const REMOVE_ALL_SELECTED_TASK = 'REMOVE_ALL_SELECTED_TASK';

const receiveSelectedTask = (task) => {
  return {
    type: RECEIVE_SELECTED_TASK,
    task
  };
};

const removeSelectedTask = (task) => {
  return {
    type: REMOVE_SELECTED_TASK,
    task
  };
};

const removeAllSelectedTask = () => {
  return {
    type: REMOVE_ALL_SELECTED_TASK,
  };
};

const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks,
  };
};

const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task,
});

const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  taskId,
});

const receiveTaskForList = (task) => ({
  type: RECEIVE_TASK_FOR_LIST,
  task,
});

const removeTaskForList = (task) => ({
  type: REMOVE_TASK_FOR_LIST,
  taskId: task.id,
  task,
});

export const addSelectedTask = (task) => dispatch => {
  dispatch(receiveSelectedTask(task));
};

export const deleteSelectedTask = (task) => dispatch => {
  dispatch(removeSelectedTask(task));
};

export const deleteAllSelectedTask = () => dispatch => {
  dispatch(removeAllSelectedTask());
};

export const fetchTaskSearch = (searchTerm) => dispatch => {
  return TaskAPIUtil.requestTaskSearch(searchTerm)
    .then(
      (tasks) => dispatch(receiveTasks(tasks))
    );
};

export const fetchTaskIndex = () => dispatch => {
  return TaskAPIUtil.requestTaskIndex()
    .then(
      (tasks) => dispatch(receiveTasks(tasks))
    );
};

export const fetchListTasks = (listId) => dispatch => {
  return TaskAPIUtil.requestListTask(listId)
    .then(
      (tasks) => dispatch(receiveTasks(tasks))
    );
};

export const fetchTask = (id) => dispatch => {
  return TaskAPIUtil.requestTask(id)
    .then(
      (task) => dispatch(receiveTask(task))
    );
};

export const createTask = (taskForm) => dispatch => {
  return TaskAPIUtil.createTask(taskForm)
    .then(
      (task) => {
        dispatch(receiveTask(task));
        dispatch(receiveTaskForList(task));
      }
    );
};

export const updateTask = (taskForm) => dispatch => {
  return TaskAPIUtil.updateTask(taskForm)
    .then(
      (task) => dispatch(receiveTask(task))
    );
};

export const deleteTask = (id) => dispatch => {
  return TaskAPIUtil.deleteTask(id)
    .then(
      (task) => {
        dispatch(removeTask(task.id));
        dispatch(removeTaskForList(task));
      }
    );
};
