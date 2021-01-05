import Vue from 'vue';

const state = {
  tasks: {
    'TdT100': {
      name: "Take a YouTube video",
      completed: false,
      dueDate: "15.01.2020",
      dueTime: "18:00"
    },
    'TdT101': {
      name: "YouTube channel promotion",
      completed: false,
      dueDate: "25.01.2020",
      dueTime: "18:30"
    },
    'TdT102': {
      name: "Learn Vuex",
      completed: true,
      dueDate: "07.01.2020",
      dueTime: "14:00"
    },
    'TdT103': {
      name: "Application with Quasar",
      completed: false,
      dueDate: "05.01.2020",
      dueTime: "20:00"
    },
    'TdT04': {
      name: "Login transactions with Vuex",
      completed: false,
      dueDate: "12.01.2020",
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
    }
};

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    }
};

const getters = {
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
