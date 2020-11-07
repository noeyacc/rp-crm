
const state = {
  menuList: [
    {
      id: 1,
      name: "員工出勤表",
      router: "Attendance"
    }, {
      id: 2,
      name: "醫療普及表",
      router: "Patients"
    }, {
      id: 3,
      name: "病歷表",
      router: "Cases"
    }
  ]
};

const actions = {
  // 新增清單項目
  // createTodoItem({ commit }, payload) {
  //   commit("setTodoItem", payload)
  // },
};

const mutations = {
  // 存入vuex
  // setTodoItem(state, payload) {
  //   state.todoList = payload
  // },
};

const getters = {
  menuList: state => state.menuList
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
