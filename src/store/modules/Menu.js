
const state = {
  menuList: [
    // {
    //   id: 1,
    //   name: "員工出勤表",
    //   router: "Attendance",
    //   icon: 'mdi-view-dashboard'
    // }, 
    {
      id: 2,
      name: "醫療普及表",
      router: "Patients",
      icon: 'mdi-view-dashboard'
    }, 
    // {
    //   id: 3,
    //   name: "病歷表",
    //   router: "Cases",
    //   icon: 'mdi-view-dashboard'
    // }
  ]
};

const actions = {};

const mutations = {};

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
