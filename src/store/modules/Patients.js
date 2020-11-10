
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
      contactName: "王正祥", // 緊急連絡人
      contactPhone: "5240156"
    }
  ]
};

const actions = {
  // 新增資料
  createPatientData({ commit }, payload) {
    commit("addPatientData", payload)
  },
};

const mutations = {
  // 存入vuex
  addPatientData(state, payload) {
    state.patientList.splice(0, 0, payload)
  },
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
