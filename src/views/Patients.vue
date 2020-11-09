<template>
  <div class="patient">
    <v-container class="lighten-5">
      <v-row>
        <v-col>
          <v-btn elevation="2">新增</v-btn>
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
              <span>{{ item.name }}</span
              ><br />
              <span>{{ item.phone }}</span>
            </template>
            <template v-slot:item.actions="{ item }">
              <span class="cursor--pointer" @click="editItem(item)">編輯</span>
              <!-- todoo: import icons -->
              <!-- <v-icon @click="editItem(item)">
                mdi-pencil
              </v-icon>-->
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { deepCopy } from "@UTIL/other";
export default {
  name: "Patient",
  data() {
    return {
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
  methods: {
    editItem(item) {
      console.log("item: ", item);
    }
  }
};
</script>
