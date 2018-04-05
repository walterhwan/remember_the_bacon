import * as TaskAPIUtil from '../util/task_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


const receiveTasks = (tasks) => ({
  type: RECEIVE_TASKS,
  tasks,
});

const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task,
});

const removeTask = (taskId) => ({
  type: RECEIVE_TASK,
  taskId,
});

export const fetchTaskIndex = () => dispatch => {
  return TaskAPIUtil.requestTaskIndex()
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
      (task) => dispatch(receiveTask(task))
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
      (task) => dispatch(removeTask(id))
    );
};
