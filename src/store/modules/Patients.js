
const state = {
  patientList: [
    {
      id: 1, // 病例編號
      name: "黑傑克", // 姓名
      sex: 1, // 性別
      bloodType: "O", // 血型
      height: 172, // 身高
      weight: 65, // 體重
      birthday: "1980/12/1", // 生日
      age: "40", // 年齡
      phone: "7386077", // 電話
      emergencyContact: { // 緊急連絡人
        name: "王正祥",
        phone: "5240156"
      }
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
  patientList: state => state.patientList
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
