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
            <v-icon small @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { deepCopy } from "@UTIL/other";
import { db } from "@/plugins/firebase";
export default {
  name: "PatientList",
  data() {
    return {
      firelist: [],
      tableTitles: [
        { text: "病例編號", value: "id", align: "center" },
        { text: "姓名", value: "name", align: "center" },
        { text: "性別", value: "sexText", align: "center" },
        { text: "血型", value: "bloodType", align: "center" },
        { text: "出生年月日", value: "birthday", align: "center" },
        { text: "連絡電話", value: "phone", align: "center" },
        { text: "緊急連絡人", value: "emergencyContact", align: "center" },
        { text: "操作", value: "actions", sortable: false }
      ]
    };
  },
  // todoo: check issue for get data fail
  firestore: {
    firelist: db.collection("patients")
  },
  computed: {
    ...mapGetters({
      patientList: "Patients/patientList"
    }),
    list() {
      let list = deepCopy(this.patientList || []);
      list = list.map(i => {
        i.sexText = i.sex === 1 ? "男" : "女";
        return i;
      });
      return list;
    }
  },
  created() {
    db.collection("patients")
      .doc("PA00001")
      .get()
      .then(snapshot => {
        // console.log("patients_PA00001: ", snapshot.data());
        this.detail = snapshot.data();
        // return { status: "success", data: snapshot.data() };
      })
      .catch(error => {
        console.log("error: ", error);
        // return { status: "fail", data: error };
      });
  },
  methods: {
    goAdd() {
      this.$router.push({
        name: "PatientsCreate"
      });
    },
    editItem(item) {
      console.log("item: ", item);
    }
  }
};
</script>
