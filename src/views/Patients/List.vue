<template>
  <div>
    <v-row justify="space-between">
      <v-col>
        <v-btn elevation="2" @click="goAdd">新增</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="tableTitles" :items="list" class="elevation-1">
          <template v-slot:header.emergencyContact>
            <span>緊急連絡人</span><br />
            <span>緊急連絡人電話</span>
          </template>
          <template v-slot:item.emergencyContact="{ item }">
            <span>{{ item.contactName }}</span
            ><br />
            <span>{{ item.contactPhone }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small @click="goDetail(item)">
              mdi-pencil
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
// import { deepCopy } from "@UTIL/other";
import { db } from "@/plugins/firebase";
export default {
  name: "PatientList",
  data() {
    return {
      list: [],
      tableTitles: [
        { text: "病例編號", value: "id", align: "center", sortable: false },
        { text: "姓名", value: "name", align: "center", sortable: false },
        { text: "性別", value: "sexText", align: "center", sortable: false },
        { text: "血型", value: "bloodType", align: "center", sortable: false },
        { text: "出生年月日", value: "birthdayText", align: "center", sortable: false },
        { text: "連絡電話", value: "phone", align: "center", sortable: false },
        { text: "緊急連絡人", value: "emergencyContact", align: "center", sortable: false },
        { text: "操作", value: "actions", sortable: false }
      ]
    };
  },
  computed: {
    // ...mapGetters({
    //   patientList: "Patients/patientList"
    // })
  },
  created() {
    this.getList();
    db.collection("patients")
      .doc("PA00001")
      .get()
      .then(snapshot => {
        console.log("patients_PA00001: ", snapshot.data());
        this.detail = snapshot.data();
        // return { status: "success", data: snapshot.data() };
      })
      .catch(error => {
        console.log("error: ", error);
        // return { status: "fail", data: error };
      });
  },
  methods: {
    // 取得列表
    async getList() {
      db.collection("patients")
        .get()
        .then(docs => {
          let list = [];
          docs.forEach(el => {
            console.log("el: ", el);
            let data = el.data();
            data.birthdayText = new Date(data.birthday.seconds * 1000);
            data.sexText = el.sex === 1 ? "男" : "女";
            data.birthdayText = data.birthdayText.toLocaleDateString().replace(/\//g, "-");
            list.push({
              ...data
            });
          });
          this.list = list;
        })
        .catch(error => {
          console.log("Get list fail", error);
        });
    },
    goAdd() {
      this.$router.push({
        name: "PatientsCreate"
      });
    },
    goDetail(item) {
      this.$router.push({
        name: "PatientsDetail",
        params: {
          id: item.id
        }
      });
    }
  }
};
</script>
