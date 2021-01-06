import Vue from 'vue';
import { uid } from 'quasar'

const state = {
  tasks: {
    'TdT100': {
      name: "Take a YouTube video",
      completed: false,
      dueDate: "15/01/2020",
      dueTime: "18:00"
    },
    'TdT101': {
      name: "YouTube channel promotion",
      completed: false,
      dueDate: "25/01/2020",
      dueTime: "18:30"
    },
    'TdT102': {
      name: "Learn Vuex",
      completed: true,
      dueDate: "07/01/2020",
      dueTime: "14:00"
    },
    'TdT103': {
      name: "Application with Quasar",
      completed: false,
      dueDate: "05/01/2020",
      dueTime: "20:00"
    },
    'TdT04': {
      name: "Login transactions with Vuex",
      completed: false,
      dueDate: "12/01/2020",
      dueTime: "22:45"
    }
  }
};

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
      Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
      Vue.set(state.tasks, payload.id, payload.task)
    }
};

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
      let taskId = uid()
      let payload = {
        id: taskId,
        task: task
      }
      commit('addTask', payload)
    }
};

const getters = {
  tasksTodo: state => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key) {
      let task = state.tasks[key]
      if(!task.completed) {
        tasks[key] = task
      }
    })
    return tasks;
  },
  tasksCompleted: state => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key) {
      let task = state.tasks[key]
      if(task.completed) {
        tasks[key] = task
      }
    })
    return tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
